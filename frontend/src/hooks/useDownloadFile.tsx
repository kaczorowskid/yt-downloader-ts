import { useEffect, useState } from 'react';
import axios from 'axios';
import { config } from '../config';
import { downloader } from '../helper/downloader';
import Pusher from 'pusher-js';
import DownloadFileProgress from '../components/DownloadFileProgress/DownloadFileProgress';

export const useDownloadFile = () => {

    const { downloadOne } = config.url.download;
    const [percent, setPercent] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false)
    const [title, setTitle] = useState<string>()

    const download = (url: string, title: string) => {
        setVisible(true)
        setTitle(title)
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

    useEffect(() => {
        const pusher = new Pusher(process.env.REACT_APP_KEY as string, {
            cluster: process.env.REACT_APP_CLUSTER
        });

        const channel = pusher.subscribe('download');

        channel.bind('progress', (data: any) => {
            setPercent(data.percentage);
        });

        return () => pusher.unsubscribe('download');
    }, [visible])

    const Tiles = () => {

        percent >= 100 && setTimeout(() => { 
            setVisible(false)
            setPercent(0)
         }, 2000)

        return (
            <>
                {visible && <DownloadFileProgress data={[{ title: title, percent: percent }]} />}
            </>
        )
    }

    return {
        download,
        Tiles
    }
}