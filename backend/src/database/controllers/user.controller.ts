import { Request, Response } from 'express';
import { tokenGenerator } from '../../helper/tokenGenerator';
import { confirmAccountService, registerService, loginService, refreshMeService, generateResetPasswordLinkService, resetPasswordService } from '../services/user.service';

export const confirmAccount = async (req: Request, res: Response) => {
    const { token }: any = req.query;
    console.log(token)
    const data = await confirmAccountService(token);

    data ? res.json({ confirm: true }) : res.json({ confirm: false })
}

export const register = async (req: Request, res: Response) => {
    const { email, password }: any = req.query;

    const data = await registerService(email, password);

    if (data) {
        if(data.err!) res.status(data.errStatus!).json(data!)
        else res.status(data.succesStatus!).json(data!);
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password }: any = req.query;

    const data = await loginService(email, password);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
        else {
            const accessToken = tokenGenerator({ id: data.user.id! }, process.env.ACCESS_TOKEN as string, 86400);
            res.status(200).cookie('JWT', accessToken, {
                maxAge: 86400000,
                httpOnly: true
            }).json({
                id: data.user.id,
                email: data.user.email,
                active: data.user.active
            })
        }
    }

}

export const refreshMe = async (req: Request, res: Response) => {
    const cookie = req.cookies.JWT

    const data = await refreshMeService(cookie);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
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
        if (data.err!) res.status(data.errStatus!).json(data!)
        else res.status(200).json(data.err!)
    }
}

export const resetPassword = async (req: Request, res: Response) => {
    const { password, oldPassword, token }: any = req.query;

    const data = await resetPasswordService(token, password, oldPassword);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
        else res.status(200).json(data.err!)
    }
}