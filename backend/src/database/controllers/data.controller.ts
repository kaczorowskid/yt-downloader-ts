import { Request, Response } from 'express';
import { getAllDataService, deleteItemService, addItemService } from '../services/data.service';
import { IDataService } from '../../types/IDataService';
import { IExpressMiddleware } from '../../types/IExpressMiddleware';


interface IRqQuery {
    id: any
}

export const getAllData: IExpressMiddleware<any, IRqQuery> = async (req, res) => {
    const { id } = req.query;

    const data: IDataService | undefined = await getAllDataService(id)

    if(data) {
        res.status(data.succesStatus!).json(data.succesData!)
    }
}

export const deleteItem = async (req: Request, res: Response) => {
    const { id }: any = req.query;

    const data: IDataService | undefined = await deleteItemService(id)

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
