import { Request, Response } from 'express';
import { tokenGenerator } from '../../helper/tokenGenerator';
import { confirmAccountService, registerService, loginService, refreshMeService, generateResetPasswordLinkService, resetPasswordService } from '../services/user.service';
import { sendMail } from '../../helper/mailer';
import { User } from '../models/User';
import jwt from 'jsonwebtoken'

export const confirmAccount = async (req: Request, res: Response) => {
    const { token }: any = req.query;
    console.log(token)
    const data = await confirmAccountService(token);

    data ? res.json({ confirm: true }) : res.json({ confirm: false })
}

export const register = async (req: Request, res: Response) => {
    const { email, password }: any = req.query;

    const isCreated = await registerService(email, password);

    isCreated ?
        res.status(200).send({ msg: 'utworzony' }) :
        res.status(401).send({ msg: 'email jest już w bazie' })
}

export const login = async (req: Request, res: Response) => {
    const { email, password }: any = req.query;

    const data = await loginService(email, password);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data.msg!)
        else {
            const accessToken = tokenGenerator({ id: data.user.id! }, process.env.ACCESS_TOKEN as string, 86400);
            res.status(200).cookie('JWT', accessToken, {
                maxAge: 86400000,
                httpOnly: true
            }).json(data.user!)
        }
    }

}

export const refreshMe = async (req: Request, res: Response) => {
    const cookie = req.cookies.JWT

    const data = await refreshMeService(cookie);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data.msg!)
        else res.status(200).json(data.user!)
    }
}

export const logout = (req: Request, res: Response) => {
    res.clearCookie('JWT').json({ msg: 'logout' })
}

export const generateResetPasswordLink = async (req: Request, res: Response) => {
    const { email }: any = req.query;

    const data = await generateResetPasswordLinkService(email);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data.msg!)
        else res.status(200).json(data.err!)
    }
}

export const resetPassword = async (req: Request, res: Response) => {
    const { password, token }: any = req.query;

    const data = await resetPasswordService(token, password);

    if (data) {
        if (data.err!) res.json(data.e)
        else res.status(200).json(data.err!)
    }
}