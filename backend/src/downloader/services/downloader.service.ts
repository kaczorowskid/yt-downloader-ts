import { getVideoInfo, getStream, getMusic } from "../downloader"
import pusher from "../../pusher";
import { createFolder } from "../../helper/musicFolder";

export const getInfoService = async (videoUrl: string) => {
    try {
        const data = await getVideoInfo(videoUrl);

        return data
    } catch (e) {
        console.log(e)
    }
}

export const downloadOneService = async (url: string, title: string) => {
    createFolder();

    const stream = await getStream(url as string);
    stream.on('progress', (_, totalDownloaded, total) => {
        let percentage: number = Math.trunc((totalDownloaded / total) * 100);

        pusher.trigger('download', 'progress', {
            percentage,
        });
    })
    const status = await getMusic(stream, title as string)
    return status;
}