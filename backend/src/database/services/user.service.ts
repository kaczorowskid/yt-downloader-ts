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
        console.log('emailToken ', emailToken)
        sendMail(emailToken, email)

        return true;
    }
    else {
        return false
    }
}

export const loginService = async (email: string, password: string) => {
    try {
        const user: any = await User.findOne({ where: { email: email } });
        if (user === null) return {
            err: true,
            errStatus: 401,
            msg: 'No user in database'
        }
        const isFine = await brypt.compare(password, user.password)

        if(isFine) {
            return {
                err: false,
                user: user
            }
        } else {
            return {
                err: true,
                errStatus: 403,
                msg: 'Wrong pass'
            }
        }

    } catch (e) {
        console.log(e)
    }
}

export const refreshMeService = async (cookie: string) => {
    try {
        if (!cookie) return {
            err: true,
            errStatus: 403,
            msg: 'No cockie' 
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
            e
        }
    }
}