import { Request, Response } from 'express';
import { getAllDataService, deleteItemService, addItemService } from '../services/data.service';
import { IDataService } from '../../../types/IDataService';

export const getAllData = async (req: Request, res: Response) => {
    const { id } = req.query;

    const data: IDataService | undefined = await getAllDataService(id as string)

    if(data) {
        res.status(data.succesStatus!).json(data.succesData!)
    }
}

export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.query;

    const data: IDataService | undefined = await deleteItemService(id as string)

    if(data) {
        res.status(data.succesStatus!).json(data.succesData!)
    }
}

export const addItem = async (req: Request, res: Response) => {
    const { folder_id, title, imageSrc, url }: any = req.query;

    const data: IDataService | undefined = await addItemService(folder_id, title, imageSrc, url)

    if(data) {
        res.status(data.succesStatus!).json(data.succesData!)
    }
}
