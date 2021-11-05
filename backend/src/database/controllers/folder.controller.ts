import { Request, Response } from 'express';
import { Folders } from '../models/Folder';

export const getFolders = async (req: Request, res: Response) => {
    const { id } = req.query

    try {
        const data = await Folders.findAll({where: {user_id: id}, attributes: ['title', 'id']});
        res.json({data: data, length: data.length});
    } catch(e) {
        console.log('getFolders error')
    }
}

export const deleteFolder = async (req: Request, res: Response) => {
    const { id, title } = req.query;

    try {
        const data = await Folders.destroy({where: {user_id: id, title: title}});
        res.json({data: data})
    } catch(e) {
        console.log(e)
    }
}

export const addFolder = async (req: Request, res: Response) => {
    const { id, title } = req.query;
 
    try {
        const data = await Folders.create({
            title: title as string, 
            user_id: id as string
        })
        res.json({data: data})
    } catch(e) {
        console.log('addFolder error')
    }
}