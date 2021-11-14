import { getVideoInfo } from "../downloader"


export const getInfoService = async (videoUrl: string) => {
    try {
        const data = await getVideoInfo(videoUrl);

        return data
    } catch (e) {
        console.log(e)
    }
}