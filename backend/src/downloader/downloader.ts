import ytdl, { videoInfo } from 'ytdl-core';
import fs from 'fs';
import { Stream } from 'node:stream';

export const getVideoInfo = async (url: string): Promise<any> => {
    const res: videoInfo = await ytdl.getInfo(url);
    const infoResponse: any = {
        id: res.videoDetails.videoId,
        title: res.videoDetails.title,
        thumbnail: res.player_response.videoDetails.thumbnail.thumbnails[3].url,
        duration: +res.player_response.videoDetails.lengthSeconds,
        url: url
    }
    return infoResponse;
}

export const getStream = (url: string): Promise<Stream> => {
    return new Promise((resolve, reject) => {
        const stream: Stream = ytdl(url, {
            filter: 'audioonly',
            quality: 'highestaudio'
        })
        resolve(stream);
    })
}

export const getMusic = (res: Stream, name: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        res.pipe(fs.createWriteStream(`./src/music/${name}.mp3`))
            .on('finish', () => {
                resolve(true);
            })
    })
}


