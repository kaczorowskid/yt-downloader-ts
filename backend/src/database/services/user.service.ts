import { User } from '../models/User';
import brypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendMail } from '../../helper/mailer';
import { tokenGenerator } from '../../helper/tokenGenerator';

export const confirmAccountService = async (token: string) => {
    try {
        const { id }: any = jwt.verify(token, process.env.EMAIL_TOKEN! as string)
        await User.update({ active: true }, { where: { id } })
        return true
    } catch (e) {
        return false
    }
}

export const registerService = async (email: string, password: string) => {
    const userExist: number = await User.count({ where: { email: email } });
    const hashPassword: string = await brypt.hash(password, 10);

    if (!userExist) {
        const user: any = await User.create({
            email: email,
            password: hashPassword,
            active: false
        })

        const emailToken = tokenGenerator({ id: user.id }, process.env.EMAIL_TOKEN as string, '1d');

        sendMail(emailToken, email, 'confirm');

        return {
            err: false,
            succesStatus: 201,
            succesData: 'Created'
        }
    }
    else {
        return {
            err: true,
            errStatus: 409,
            errData: 'User exist in database'
        }
    }
}

export const loginService = async (email: string, password: string) => {
    try {
        const user: any = await User.findOne({ where: { email: email } });
        if (user === null) return {
            err: true,
            errStatus: 401,
            errData: 'No user in database'
        }
        const isFine = await brypt.compare(password, user.password)

        if (isFine) {
            return {
                err: false,
                user: user
            }
        } else {
            return {
                err: true,
                errStatus: 400,
                errData: 'Wrong pass'
            }
        }

    } catch (e) {
        return {
            err: true,
            errStatus: e.response.status,
            errData: e.response.data
        }
    }
}

export const refreshMeService = async (cookie: string) => {
    try {
        if (!cookie) return {
            err: true,
            errStatus: 403,
            errData: 'No cookie'
        }
        else {
            const { id }: any = jwt.verify(cookie, process.env.ACCESS_TOKEN as string)
            const user: any = await User.findOne({ where: { id: id } });
            return {
                err: false,
                user: user
            }
        }
    } catch (e) {
        return {
            err: true,
            errStatus: e.response.status,
            errData: e.response.data
        }
    }
}

export const generateResetPasswordLinkService = async (email: string) => {
    try {
        const user: any = await User.findOne({ where: { email: email } });

        if (user) {
            const passwordResetToken = tokenGenerator({ id: user.id! }, process.env.RESET_PASSWORD_TOKEN as string, 86400);
            sendMail(passwordResetToken, email, 'reset');
            console.log(email, ' ', passwordResetToken)
            return {
                err: false,
            }
        } else {
            return {
                err: true,
                errStatus: 403,
                errData: 'No email in database'
            }
        }
    } catch (e) {
        return {
            err: true,
            errStatus: e.response.status,
            errData: e.response.data
        }
    }
}

export const resetPasswordService = async (token: string, password: string, oldPassword: string) => {
    try {
        const { id }: any = jwt.verify(token, process.env.RESET_PASSWORD_TOKEN! as string)

        const user: any = await User.findOne({ where: { id: id } });
        if (user === null) return {
            err: true,
            errStatus: 401,
            msg: 'No user in database'
        }

        const isFine = await brypt.compare(oldPassword, user.password)

        console.log(isFine)

        if (isFine) {
            const hashPassword: string = await brypt.hash(password, 10);
            await User.update({ password: hashPassword }, { where: { id } })
            return {
                err: false
            }
        } else {
            return {
                err: true,
                errStatus: 401,
                msg: 'Wrong old password'
            }
        }
    } catch (e) {
        return {
            err: true,
            errStatus: e.response.status,
            msg: e.response.data
        }
    }
}