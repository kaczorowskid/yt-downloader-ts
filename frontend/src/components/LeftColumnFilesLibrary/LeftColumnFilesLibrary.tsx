import React from 'react';
import * as styled from './LeftColumnFilesLibrary.styled';
import { useLeftColumn } from '../../hooks/useLeftColumn';
import Card from '../Card/Card';
import { useYouTubeData } from '../../hooks/useYouTubeData';
import { useLibraryData } from '../../hooks/useLibraryData';



const LeftColumnFilesLibrary: React.FC = () => {

    const { leftColumnVisible, setLeftColumnVisible } = useLeftColumn();
    const { fetchYouTubeData } = useYouTubeData();
    const { libraryFolders } = useLibraryData();

    return (
        <>
            <styled.Container visible = {leftColumnVisible} >
                <styled.ItemContainer>
                    {fetchYouTubeData.map((data, i) => <Card key = {i} youtubeData = {data} />)}
                </styled.ItemContainer>
            </styled.Container>
            <styled.ArrowIconContainer visible = {leftColumnVisible} onClick = {() => setLeftColumnVisible(!leftColumnVisible)} >
                {leftColumnVisible ? <styled.ArrowLeftIcon /> : <styled.ArrowRightIcon />}
            </styled.ArrowIconContainer>
        </>
    )
}

export default LeftColumnFilesLibrary;