import { Request, Response } from 'express';
import Downloader from '../../downloader'
import path from 'path'
import fs from 'fs'

const downloader = new Downloader();

const createFolder = () => {
    const dir = path.join(__dirname, `../../music`);
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
}

const removeFolder = () => {
    fs.rmdirSync(path.join(__dirname, `../../music`), {recursive: true})
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

export const downloadOne = async (req: Request, res: Response) => {
    const { url, title } = req.query;

    createFolder();

    const filePath = path.join(__dirname, `../../music/${title as string}.mp3`)

    console.log(filePath)

    const stream = await downloader.getStream(url as string);
    stream.on('progress', (_, totalDownloaded, total) => {
        let percentage: number = +((totalDownloaded / total) * 100).toFixed(2);
        console.log(percentage);
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

export const getZip = async (req: Request<{}, {}, {}, { data: any }>, res: Response) => {
    const { data } = req.query;
    createFolder();
    const filePath = path.join(__dirname, '../../files.zip')

    const queue: Array<any> = [];

    data.forEach((response: any) => {
        queue.push((async () => {
            const resObject = JSON.parse(response);
            const stream = await downloader.getStream(resObject.url);
            stream.on('progress', (_, totalDownloaded, total) => {
                let percentage: number = +((totalDownloaded / total) * 100).toFixed(2);
                console.log(percentage);
            })
            await downloader.getMusic(stream, resObject.title)
        })())
    })

    await Promise.all(queue)

    downloader.makeZip('files');
    res.sendFile(filePath)
    res.on('finish', () => {
        try {
            removeFolder();
            fs.unlinkSync(path.join(__dirname, `../../files.zip`))
        } catch (e) {
            console.log(e)
        }
    })
}