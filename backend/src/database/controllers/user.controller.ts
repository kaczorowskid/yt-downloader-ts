import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import brypt from 'bcrypt';
import { User } from '../models/User';
import { sendMail } from '../../helper/mailer';

const generateToken = (data: any, key: string, time: number | string) => jwt.sign(data, key, { expiresIn: time });

export const confirmAccount = async (req: Request, res: Response) => {
    const { token }: any = req.query;
    console.log(token)
    try {
        const { id }: any = jwt.verify(token, process.env.EMAIL_TOKEN! as string)
        await User.update({ active: true }, { where: { id } })
        res.json({confirm: true})
    } catch (e) {
        res.json({confirm: false})
    }
}

export const register = async (req: Request, res: Response) => {
    const { email, password }: any = req.query;

    const userExist: number = await User.count({ where: { email: email } });
    const hashPassword: string = await brypt.hash(password, 10);

    if (!userExist) {
        const user: any = await User.create({
            email: email,
            password: hashPassword,
            active: false
        })

        const emailToken = generateToken({ id: user.id }, process.env.EMAIL_TOKEN as string, '1d');
        console.log('emailToken ', emailToken)
        sendMail(emailToken, email)

        res.status(200).send({ msg: 'utworzony' })
    }
    else {
        res.status(401).send({ msg: 'email jest już w bazie' })
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password }: any = req.query;

    try {
        const user: any = await User.findOne({ where: { email: email } });

        if (user === null) res.status(401).json({ err: 'no trudno' });

        const isFine = await brypt.compare(password, user.password)


        if (isFine) {
            const accessToken = generateToken({ id: user.id }, process.env.ACCESS_TOKEN as string, 86400);

            res.status(200).cookie('JWT', accessToken, {
                maxAge: 86400000,
                httpOnly: true
            }).json({
                id: user.id,
                email: user.email,
                active: user.active
            })
        }
        else {
            res.status(403).json({ err: 'error' })
        }
    } catch (e) {
        console.log(e)
    }
}

export const logout = (req: Request, res: Response) => {
    res.clearCookie('JWT').json({ msg: 'logout' })
}

export const refreshMe = async (req: Request, res: Response) => {
    const cookie = req.cookies.JWT

    try {
        if (!cookie) {
            res.status(403);
            return;
        }
        else {
            const { id }: any = jwt.verify(cookie, process.env.ACCESS_TOKEN as string)
            const user: any = await User.findOne({ where: { id: id } });
            res.json({
                id: user.id,
                email: user.email,
                active: user.active
            })
        }
    } catch (e) {
        res.json({ err: e })
    }
}