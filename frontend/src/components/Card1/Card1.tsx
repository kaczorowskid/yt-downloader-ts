import React from 'react';
import { IYoutubeData } from '../../types/IYoutubeData';
import * as styled from './Card1.styled';

interface Props {
    data: IYoutubeData
}

const Card1: React.FC<Props> = ({ data }) => {
    return (
        <styled.Container>
            <styled.ImageContainer>
                <styled.DownloadIcon />
                <styled.RemoveIcon />
                <styled.Image src={data.thumbnail} />
            </styled.ImageContainer>
            <styled.Title>{data.title}</styled.Title>
        </styled.Container>
    )
}

export default Card1;