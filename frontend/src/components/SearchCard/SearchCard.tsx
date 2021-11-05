import React from 'react';
import { useYouTubeData } from '../../hooks/useYouTubeData';
import * as styled from './SearchCard.styled';
import { IYoutubeData } from '../../types/IYoutubeData';
import { useDownloadFile } from '../../hooks/useDownloadFile';

interface Props {
    youtubeData: IYoutubeData
    onClick: (val: any) => void
}

const SearchCard: React.FC<Props> = ({ youtubeData, onClick }) => {

    const { fetchYouTubeData, setFetchYouTubeData } = useYouTubeData();
    const { download, Tiles } = useDownloadFile()

    return (
        <>
            {Tiles()}
            <styled.Container >
                <styled.ImageContainer>
                    <styled.Image src={youtubeData.thumbnail} alt="" />
                </styled.ImageContainer>
                <styled.Title>{youtubeData.title}</styled.Title>
                <styled.IconContainer>
                    <styled.DownloadIcon onClick={() => download(youtubeData.url, youtubeData.title)} />
                    <styled.SaveIcon onClick={onClick} />
                    <styled.RemoveIcon onClick={() => setFetchYouTubeData(fetchYouTubeData.filter(i => i.id !== youtubeData.id))} />
                </styled.IconContainer>
            </styled.Container>
        </>
    )
}

export default SearchCard;