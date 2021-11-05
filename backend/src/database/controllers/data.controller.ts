import { Request, Response } from 'express';
import { Data } from '../models/Data';

export const getAllData = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
        const data: any = await Data.findAll({
            where: {
                folder_id: id
            },
            attributes: ['id', 'url', 'thumbnail', 'title', 'duration'],
        });
        res.send(data);
    } catch(e) {
        console.log('getAllData error')
    }
}

export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
        const data = await Data.destroy({where: {id: id}});
        res.json({data: data})
    } catch(e) {
        console.log('deleteItem error')
    }
}

export const addItem = async (req: Request, res: Response) => {
    const { folder_id, title, imageSrc, url } = req.query;

    try {
        const data = await Data.create({
            folder_id: Number(folder_id),
            title: title as string,
            thumbnail: imageSrc as string,
            url: url as string
        })
        res.json({data: data})
    } catch(e) {
        console.log('addItem error');
    }
}
