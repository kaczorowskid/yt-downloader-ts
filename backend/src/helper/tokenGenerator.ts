import jwt from 'jsonwebtoken';


export const tokenGenerator = (data: any, key: string, time: number | string) => jwt.sign(data, key, { expiresIn: time });
