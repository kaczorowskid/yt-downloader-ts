import path from 'path'
import { getInfoService, downloadOneService } from '../services/downloader.service';
import { removeFolder } from '../../helper/musicFolder';
import { IExpressMiddleware } from '../../types/IExpressMiddleware';
import { RequestQuery } from '../../types/IExpressRequest';

export const getInfo: IExpressMiddleware<any, RequestQuery> = async (req, res) => {
    const { url } = req.query;

    const data = await getInfoService(url)
    removeFolder();


    if(data) {
        res.json({ id: data.id, title: data.title, thumbnail: data.thumbnail, url: data.url })
    }
}

export const downloadOne: IExpressMiddleware<any, RequestQuery> = async (req, res) => {
    const { url, title } = req.query;

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