import { Request, Response } from 'express';
import { getFoldersService, deleteFolderService, addFolderService } from '../services/folder.service';

export const getFolders = async (req: Request, res: Response) => {
    const { id } = req.query

    const data = await getFoldersService(id as string)

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data.msg!)
        else res.status(200).json({ data: data.data!, length: data.length! })
    }
}

export const deleteFolder = async (req: Request, res: Response) => {
    const { id, title } = req.query;

    const data = await deleteFolderService(id as string, title as string)

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data.msg!)
        else res.status(200).json(data.data!)
    }
}

export const addFolder = async (req: Request, res: Response) => {
    const { id, title } = req.query;

    const data = await addFolderService(id as string, title as string)

    if (data) {
        if (data.err!) res.status(data.errStatus!).json(data.msg!)
        else res.status(200).json(data.data!)
    }
}