import {Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export const auth = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.JWT

    if (token === null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN as string, (err: any, user: any) => {
        if (err) return res.sendStatus(403);

        next()
    })
}