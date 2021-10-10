import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import userRouter from './routes/user.routes';


const app: Express = express();
const PORT: number = Number(process.env.PORT) || 4200;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use('/user', userRouter);


app.listen(PORT, () => console.log(`App listen on port ${PORT}`))