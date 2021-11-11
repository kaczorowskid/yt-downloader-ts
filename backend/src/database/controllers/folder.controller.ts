import { Request, Response } from 'express';
import { IDataService } from '../../types/IDataService';
import { getFoldersService, deleteFolderService, addFolderService } from '../services/folder.service';

export const getFolders = async (req: Request, res: Response) => {
    const { id }: any = req.query

    const data: IDataService | undefined = await getFoldersService(id)

    if (data) {
        res.status(data.succesStatus!).json(data.succesData!)
    }
}

export const deleteFolder = async (req: Request, res: Response) => {
    const { id, title }: any = req.query;

    const data: IDataService | undefined = await deleteFolderService(id, title)

    if (data) {
        res.status(data.succesStatus!).json(data.succesData!)
    }
}

export const addFolder = async (req: Request, res: Response) => {
    const { id, title }: any = req.query;

    const data: IDataService | undefined = await addFolderService(id , title)

    if (data) {
        res.status(data.succesStatus!).json(data.succesData!)
    }
}