import { Request, Response } from 'express';
import { IDataService } from '../../types/IDataService';
import { tokenGenerator } from '../../helper/tokenGenerator';
import { confirmAccountService, registerService, loginService, refreshMeService, generateResetPasswordLinkService, resetPasswordService } from '../services/user.service';
import { IExpressMiddleware } from '../../types/IExpressMiddleware';
import { RequestBody } from '../../types/IExpressRequest';

export const confirmAccount: IExpressMiddleware<RequestBody, any> = async (req, res) => {
    const { token } = req.body;

    const data: IDataService | undefined = await confirmAccountService(token);

    if(data) {
        if(data.err!) res.json({confirm: false})
        else res.json({confirm: true})
    }
}

export const register: IExpressMiddleware<RequestBody, any> = async (req, res) => {
    const { email, password } = req.body;

    const data: IDataService | undefined = await registerService(email, password);

    if (data) {
        if(data.err!) res.status(data.errStatus!).json(data!)
        else res.status(data.succesStatus!).json(data!);
    }
}

export const login: IExpressMiddleware<RequestBody, any> = async (req, res) => {
    const { email, password } = req.body;

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

export const refreshMe: IExpressMiddleware<RequestBody, any> = async (req, res) => {
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

export const generateResetPasswordLink: IExpressMiddleware<RequestBody, any> = async (req, res) => {
    const { email } = req.body;

    const data: IDataService | undefined = await generateResetPasswordLinkService(email);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
        else res.status(data.succesStatus!).json(data.err!)
    }
}

export const resetPassword: IExpressMiddleware<RequestBody, any> = async (req, res) => {
    const { password, oldPassword, token } = req.body;

    const data: IDataService | undefined = await resetPasswordService(token, password, oldPassword);

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data!)
        else res.status(data.succesStatus!).json(data.succesData!)
    }
}