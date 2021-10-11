import axios from 'axios';
import React from 'react';
import { useYouTubeData } from '../../hooks/useYouTubeData';
import * as styled from './Card.styled';
import { config } from '../../config';
import { downloader } from '../../helper/downloader';

interface Props {
    youtubeData: any
}

const Card: React.FC<Props> = ({ youtubeData }) => {

    const { downloadOne } = config.url.download;

    const { fetchYouTybeData, setFetchYouTubeData } = useYouTubeData();

    const filterArray = (id: string) => {
        setFetchYouTubeData(fetchYouTybeData.filter(i => i.id !== id))
    }

    const downloadOneFile = (itemInfo: any) => {
        axios.get(downloadOne, {
            params: {
                url: itemInfo.url,
                title: itemInfo.title
            },
            responseType: "blob"
        })
            .then(response => downloader(response, `${itemInfo.title}`))
            .catch(e => console.log(e))
    }

    return (
        <>
            <styled.Container>
                <styled.ItemContainer>
                    <styled.ImageContainer>
                        <styled.Image src={youtubeData.thumbnail} alt="" />
                    </styled.ImageContainer>
                    <styled.DataContainer>
                        <styled.Title>{youtubeData.title}</styled.Title>
                    </styled.DataContainer>
                </styled.ItemContainer>
                <styled.IconContainer>
                    <styled.RemoveIcon onClick={() => filterArray(youtubeData.id)} />
                    <styled.DownloadIcon onClick = {() => downloadOneFile(youtubeData)} />
                    <styled.SaveIcon />
                </styled.IconContainer>
            </styled.Container>
        </>
    )
}

export default Card;