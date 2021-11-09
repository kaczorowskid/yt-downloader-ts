import { Request, Response } from 'express';
import { getAllDataService, deleteItemService, addItemService } from '../services/data.service';

export const getAllData = async (req: Request, res: Response) => {
    const { id } = req.query;

    const data = await getAllDataService(id as string)

    if(data) {
        if(data.err!) res.status(data.errStatus!).json(data!)
        else res.status(200).json(data.data!)
    }
}

export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.query;

    const data = await deleteItemService(id as string)

    if(data) {
        if(data.err!) res.status(data.errStatus!).json(data!)
        else res.status(200).json(data.data!)
    }
}

export const addItem = async (req: Request, res: Response) => {
    const { folder_id, title, imageSrc, url }: any = req.query;

    const data = await addItemService(folder_id, title, imageSrc, url)

    if(data) {
        if(data.err!) res.status(data.errStatus!).json(data!)
        else res.status(200).json(data.data!)
    }
}
