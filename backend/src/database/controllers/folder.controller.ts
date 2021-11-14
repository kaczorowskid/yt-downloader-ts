import { IDataSuccess } from '../../types/IDataService';
import { getFoldersService, deleteFolderService, addFolderService } from '../services/folder.service';
import { IExpressMiddleware } from '../../types/IExpressMiddleware';
import { RequestQuery } from '../../types/IExpressRequest';

export const getFolders: IExpressMiddleware<any, RequestQuery> = async (req, res) => {
    const { id } = req.query

    const data: IDataSuccess | undefined = await getFoldersService(id)

    if (data) {
        res.status(data.successStatus).json(data.successData)
    }
}

export const deleteFolder: IExpressMiddleware<any, RequestQuery> = async (req, res) => {
    const { id, title } = req.query;

    const data: IDataSuccess | undefined = await deleteFolderService(id, title)

    if (data) {
        res.status(data.successStatus).json(data.successData)
    }
}

export const addFolder: IExpressMiddleware<any, RequestQuery> = async (req, res) => {
    const { id, title } = req.query;

    const data: IDataSuccess | undefined = await addFolderService(id , title)

    if (data) {
        res.status(data.successStatus).json(data.successData)
    }
}