import { Request, Response } from 'express';
import path from 'path'
import { getInfoService, downloadOneService } from '../services/downloader.service';
import { removeFolder } from '../../helper/musicFolder';

export const getInfo = async (req: Request, res: Response) => {
    const { url }: any = req.query;

    const data = await getInfoService(url)
    removeFolder();


    if(data) {
        res.json({ id: data.id, title: data.title, thumbnail: data.thumbnail, url: data.url })
    }
}


export const downloadOne = async (req: Request, res: Response) => {
    const { url, title }: any = req.query;

    const status = await downloadOneService(url, title);
    const filePath = path.join(__dirname, `../../music/${title}.mp3`)

    if(status) {
        res.sendFile(filePath);
        res.on('finish', () => {
            try {
                removeFolder();
            } catch (e) {
                console.log(e)
            }
        })
    }
}