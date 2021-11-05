import React from 'react';
import { useDownloadFile } from '../../hooks/useDownloadFile';
import { IYoutubeData } from '../../types/IYoutubeData';
import * as styled from './LibraryCard.styled';

interface Props {
    data: IYoutubeData
    removeItem: (val: any) => void
}

const LibraryCard: React.FC<Props> = ({ data, removeItem }) => {

    const { Tiles, download } = useDownloadFile();

    return (
        <styled.Container>
            {Tiles()}
            <styled.ImageContainer>
                <styled.DownloadIcon onClick = {() => download(data.url, data.title)} />
                <styled.RemoveIcon onClick = {removeItem} />
                <styled.Image src={data.thumbnail} />
            </styled.ImageContainer>
            <styled.Title>{data.title}</styled.Title>
        </styled.Container>
    )
}

export default LibraryCard;