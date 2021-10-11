import { Request, Response } from 'express';
import { Folders } from '../models/Folder';

export const getFolders = async (req: Request, res: Response) => {
    const { id, name } = req.query

    console.log(id, ' ', name)
    let data: any;
    try {
        if(!name) data = await Folders.findAll({where: {user_id: id}, attributes: ['title']}); /// zmieniona
        else data = await Folders.findAll({where: {user_id: id, title: name}, attributes: ['title']});
        res.json({data: data, length: data.length});
    } catch(e) {
        console.log('getFolders error')
    }
}

export const deleteFolder = async (req: Request, res: Response) => {
    const { id, name } = req.query;

    console.log('destroy name ', name)

    try {
        const data = await Folders.destroy({where: {user_id: id, title: name}});
        console.log('data: ', data)
        res.json({data: data})
    } catch(e) {
        console.log(e)
    }
}

export const addFolder = async (req: Request, res: Response) => {
    const { id, title } = req.query;
    console.log('name: ', title)
    try {
        const data = await Folders.create({ //create przyjmuje tylko stringa
            title: title as string, 
            user_id: id as string
        })
        res.json({data: data})
    } catch(e) {
        console.log('addFolder error')
    }
}