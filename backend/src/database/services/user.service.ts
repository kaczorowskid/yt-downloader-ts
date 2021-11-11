import { User } from '../models/User';
import brypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendMail } from '../../helper/mailer';
import { tokenGenerator } from '../../helper/tokenGenerator';
import { errorLogger, succesLogger } from '../../helper/logger';

export const confirmAccountService = async (token: string) => {
    try {
        const { id }: any = jwt.verify(token, process.env.EMAIL_TOKEN! as string)
        await User.update({ active: true }, { where: { id } })
        return succesLogger(false)
    } catch (e) {
        return errorLogger(true)
    }
}

export const registerService = async (email: string, password: string) => {
    try {
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

            return succesLogger(false, 201, 'User created!');
        }
        else return errorLogger(true, 409, 'User exist in database')

    } catch (e) {
        console.log(e)
    }
}

export const loginService = async (email: string, password: string) => {
    try {
        const user: any = await User.findOne({ where: { email: email } });
        if (user === null) return errorLogger(true, 401, 'No user in database');

        const isFine = await brypt.compare(password, user.password)

        if (isFine) return succesLogger(false, 201, user)
        else return errorLogger(true, 400, 'Wrong pass');

    } catch (e) {
        console.log(e)
    }
}

export const refreshMeService = async (cookie: string) => {
    try {
        if (!cookie) return errorLogger(true, 403, 'No cookies');
        else {
            const { id }: any = jwt.verify(cookie, process.env.ACCESS_TOKEN as string)
            const user: any = await User.findOne({ where: { id: id } });
            return succesLogger(false, 201, user)
        }

    } catch (e) {
        console.log(e)
    }
}

export const generateResetPasswordLinkService = async (email: string) => {
    try {
        const user: any = await User.findOne({ where: { email: email } });
        if (user) {
            const passwordResetToken = tokenGenerator({ id: user.id! }, process.env.RESET_PASSWORD_TOKEN as string, 86400);
            sendMail(passwordResetToken, email, 'reset');

            return succesLogger(false, 200);
        } else return errorLogger(true, 403, 'No email in database');

    } catch (e) {
        console.log(e)
    }
}

export const resetPasswordService = async (token: string, password: string, oldPassword: string) => {
    try {
        const { id }: any = jwt.verify(token, process.env.RESET_PASSWORD_TOKEN! as string)

        const user: any = await User.findOne({ where: { id: id } });
        if (user === null) return errorLogger(true, 401, 'No user in database');

        const isFine = await brypt.compare(oldPassword, user.password)

        if (isFine) {
            const hashPassword: string = await brypt.hash(password, 10);
            await User.update({ password: hashPassword }, { where: { id } })
            return succesLogger(false, 201, true);

        } else return errorLogger(true, 401, 'Wrong old password');

    } catch (e) {
        console.log(e);
    }
}