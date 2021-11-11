import { Request, Response } from 'express';
import { IDataService } from '../../types/IDataService';
import { tokenGenerator } from '../../helper/tokenGenerator';
import { confirmAccountService, registerService, loginService, refreshMeService, generateResetPasswordLinkService, resetPasswordService } from '../services/user.service';

export const confirmAccount = async (req: Request, res: Response) => {
    const { token }: any = req.body;

    const data: IDataService | undefined = await confirmAccountService(token);

    if(data) {
        if(data.err!) res.json({confirm: false})
        else res.json({confirm: true})
    }
}

export const register = async (req: Request, res: Response) => {
    const { email, password }: any = req.body;

    const data: IDataService | undefined = await registerService(email, password);

    if (data) {
        if(data.err!) res.status(data.errStatus!).json(data!)
        else res.status(data.succesStatus!).json(data!);
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password }: any = req.body;

    const data: IDataService | undefined = await loginService(email, password);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
        else {
            const accessToken = tokenGenerator({ id: data.succesData.id! }, process.env.ACCESS_TOKEN as string, 86400000);
            res.status(data.succesStatus!).cookie('JWT', accessToken, {
                maxAge: 86400000,
                httpOnly: true
            }).json({
                id: data.succesData.id,
                email: data.succesData.email,
                active: data.succesData.active
            })
        }
    }

}

export const refreshMe = async (req: Request, res: Response) => {
    const cookie = req.cookies.JWT

    const data: IDataService | undefined = await refreshMeService(cookie);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
        else res.status(data.succesStatus!).json(data.succesData!)
    }
}

export const logout = (req: Request, res: Response) => {
    res.clearCookie('JWT').json({ msg: 'logout' })
}

export const generateResetPasswordLink = async (req: Request, res: Response) => {
    const { email }: any = req.body;

    const data: IDataService | undefined = await generateResetPasswordLinkService(email);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
        else res.status(data.succesStatus!).json(data.err!)
    }
}

export const resetPassword = async (req: Request, res: Response) => {
    const { password, oldPassword, token }: any = req.body;

    const data: IDataService | undefined = await resetPasswordService(token, password, oldPassword);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
        else res.status(data.succesStatus!).json(data.succesData!)
    }
}