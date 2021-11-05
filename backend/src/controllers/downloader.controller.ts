import { Request, Response } from 'express';
import Downloader from '../downloader';
import path from 'path'
import fs from 'fs'
import pusher from '../pusher'

const downloader = new Downloader();

const createFolder = () => {
    const dir = path.join(__dirname, `../music`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
}

const removeFolder = () => {
    fs.rmdirSync(path.join(__dirname, `../music`), { recursive: true })
}

export const getInfo = async (req: Request, res: Response) => {
    const { url } = req.query;

    downloader.getVideoInfo(url as string)
        .then((info: any) => {
            res.json({
                id: info.id,
                title: info.title,
                thumbnail: info.thumbnail,
                duration: info.duration,
                url: url
            })
        })
        .catch(e => console.log('videoInfoError ', e))
}


export const downloadOne = async (req: Request, res: Response) => {
    const { url, title } = req.query;

    createFolder();

    const filePath = path.join(__dirname, `../music/${title}.mp3`)

    const stream = await downloader.getStream(url as string);
    stream.on('progress', (_, totalDownloaded, total) => {
        let percentage: number = Math.trunc((totalDownloaded / total) * 100);

        pusher.trigger('download', 'progress', {
            percentage,
        });
    })
    await downloader.getMusic(stream, title as string)
    res.sendFile(filePath);
    res.on('finish', () => {
        try {
            removeFolder();
        } catch (e) {
            console.log(e)
        }
    })
}