import { getAllDataService, deleteItemService, addItemService } from '../services/data.service';
import { IDataSuccess } from '../../types/IDataService';
import { IExpressMiddleware } from '../../types/IExpressMiddleware';
import { RequestQuery } from '../../types/IExpressRequest';

export const getAllData: IExpressMiddleware<any, RequestQuery> = async (req, res) => {
    const { id } = req.query;

    const data: IDataSuccess | undefined = await getAllDataService(id)

    if(data) {
        res.status(data.successStatus).json(data.successData)
    }
}

export const deleteItem: IExpressMiddleware<any, RequestQuery>  = async (req, res) => {
    const { id } = req.query;

    const data: IDataSuccess | undefined = await deleteItemService(id)

    if(data) {
        res.status(data.successStatus).json(data.successData)
    }
}

export const addItem: IExpressMiddleware<any, RequestQuery>  = async (req, res) => {
    const { folder_id, title, imageSrc, url } = req.query;

    const data: IDataSuccess | undefined = await addItemService(folder_id, title, imageSrc, url)

    if(data) {
        res.status(data.successStatus).json(data.successData)
    }
}
