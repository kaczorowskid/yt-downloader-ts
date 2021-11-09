import { Folders } from '../models/Folder';

export const getFoldersService = async (id: string) => {
    try {
        const data = await Folders.findAll({where: {user_id: id}, attributes: ['title', 'id']});
        return {
            err: false,
            data: data,
            length: data.length
        }
    } catch(e) {
        return {
            err: true,
            errStatus: e.response.status,
            errData: e.response.data
        }
    }
}

export const deleteFolderService = async (id: string, title: string) => {
    try {
        const data = await Folders.destroy({where: {user_id: id, title: title}});
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

export const addFolderService = async (id: string, title: string) => {
    try {
        const data = await Folders.create({
            title: title as string, 
            user_id: id as string
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