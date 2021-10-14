import { Request, Response } from 'express';
import { Data } from '../models/Data';

export const getAllData = async (req: Request, res: Response) => {
    const { id } = req.query;

    try {
        const data: any = await Data.findAll({
            where: {
                folder_id: id
            },
            attributes: ['id', 'link_to_yt', 'image_src', 'title', 'duration'],
        });
        res.send(data);
    } catch(e) {
        console.log('getAllData error')
    }
}

// export const deleteItem = async (req: Request, res: Response) => {
//     const { id } = req.query;

//     try {
//         const data = await Data.destroy({where: {id: id}});
//         res.json({data: data})
//     } catch(e) {
//         console.log('deleteItem error')
//     }
// }

// export const addItem = async (req: Request, res: Response) => {
//     const { id, folder, link_to_yt, image_src, title, duration } = req.query;

//     try {
//         const data = await Data.create({
//             user_id: id as string,
//             folder: folder as string,
//             link_to_yt: link_to_yt as string,
//             image_src: image_src as string,
//             title: title as string,
//             duration: duration as string
//         })
//         res.json({data: data})
//     } catch(e) {
//         console.log('addItem error');
//     }
// }
