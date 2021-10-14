import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import userRouter from './routes/user.routes';
import folderRouter from './routes/folder.routes';
import downloaderRouter from './routes/downloader.routes';
import dataRouter from './routes/data.routes';


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
app.use('/folder', folderRouter);
app.use('/data', dataRouter);
app.use('/download', downloaderRouter)



app.listen(PORT, () => console.log(`App listen on port ${PORT}`))

// import Downloader from "./downloader";

// ( async () => {
//     const downloader = new Downloader();

//     const stream = await downloader.getStream('https://www.youtube.com/watch?v=yzYmtWJwaQs');
//     // const stream = await downloader.getStream(url as string);
//     // stream.on('progress', (_, totalDownloaded, total) => {
//     //     let percentage: number = +((totalDownloaded / total) * 100).toFixed(2);
//     //     console.log(percentage);
//     // })
//     await downloader.getMusic(stream, 'Szczyl - Wielkie Miasta (Official Video)')
// })()