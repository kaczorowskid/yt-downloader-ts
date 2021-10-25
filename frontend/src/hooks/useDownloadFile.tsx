import axios from 'axios';
import { config } from '../config';
import { downloader } from '../helper/downloader';

export const useDownloadFile = () => {

    const { downloadOne } = config.url.download;
    
    const download = (url: string, title: string) => {
        axios.get(downloadOne, {
            params: {
                url,
                title
            },
            responseType: "blob"
        })
            .then(response => downloader(response, `${title}`))
            .catch(e => console.log(e))
    }

    return {
        download
    }
}