import { Data } from '../models/Data';

export const getAllDataService = async (id: string) => {
    try {
        const data: any = await Data.findAll({
            where: {
                folder_id: id
            },
            attributes: ['id', 'url', 'thumbnail', 'title', 'duration'],
        });
        return {
            err: false,
            data: data
        }
    } catch(e) {
        return {
            err: true,
            errStatus: e.response.status,
            errData: e.response.data
        }
    }
}

export const deleteItemService = async (id: string) => {
    try {
        const data = await Data.destroy({where: {id: id}});
        return {
            err: false,
            data: data
        }
    } catch(e) {
        return {
            err: true,
            errStatus: e.response.status,
            errData: e.response.data
        }
    }
}

export const addItemService = async (folder_id: string, title: string, imageSrc: string, url: string) => {

    try {
        const data = await Data.create({
            folder_id: Number(folder_id),
            title: title as string,
            thumbnail: imageSrc as string,
            url: url as string
        })
        return {
            err: false,
            data: data
        }
    } catch(e) {
        return {
            err: true,
            errStatus: e.response.status,
            errData: e.response.data
        }
    }
}