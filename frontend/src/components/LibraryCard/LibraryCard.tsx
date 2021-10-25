import React, { useEffect } from 'react';
import { IYoutubeData } from '../../types/IYoutubeData';
import * as styled from './LibraryCard.styled';

interface Props {
    data: IYoutubeData
    removeItem: (val: any) => void
}

const LibraryCard: React.FC<Props> = ({ data, removeItem }) => {

    return (
        <styled.Container>
            <styled.ImageContainer>
                <styled.DownloadIcon />
                <styled.RemoveIcon onClick = {removeItem} />
                <styled.Image src={data.thumbnail} />
            </styled.ImageContainer>
            <styled.Title>{data.title}</styled.Title>
        </styled.Container>
    )
}

export default LibraryCard;