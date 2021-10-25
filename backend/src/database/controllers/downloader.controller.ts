import { Request, Response } from 'express';
import Downloader from '../../downloader'
import path from 'path'
import fs from 'fs'
import pusher from '../../pusher';

const downloader = new Downloader();

const createFolder = () => {
    const dir = path.join(__dirname, `../../music`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
}

const removeFolder = () => {
    fs.rmdirSync(path.join(__dirname, `../../music`), { recursive: true })
}

export const getInfo = async (req: Request, res: Response) => {
    const { url } = req.query;
    console.log('url ', url)

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
        .catch(e => console.log(e))
}

let downloadPercentage = 0;

export const downloadOne = async (req: Request, res: Response) => {
    const { url, title } = req.query;

    createFolder();

    const filePath = path.join(__dirname, `../../music/${title}.mp3`)

    const stream = await downloader.getStream(url as string);
    stream.on('progress', (_, totalDownloaded, total) => {
        let percentage: number = Math.trunc((totalDownloaded / total) * 100);
        console.log(percentage)
        // downloadPercentage = percentage
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

export const startCount = (req: Request, res: Response) => {
    let percent = 0;
    const interval = setInterval(() => {
        downloadPercentage = percent;
        percent += 5;

        if(percent > 100) clearInterval(interval);
    }, 400);


    res.json({count: 'start'})
}

export const percent = (req: Request, res: Response) => {
    res.json({percent: downloadPercentage});
}