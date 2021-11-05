import React, { useEffect, useState } from 'react';
import * as styled from './LeftColumnFilesLibrary.styled';
import { useLeftColumn } from '../../hooks/useLeftColumn';
import SearchCard from '../SearchCard/SearchCard';
import FoldersCard from '../FoldersCard/FoldersCard';
import { useYouTubeData } from '../../hooks/useYouTubeData';



const LeftColumnFilesLibrary: React.FC = () => {

    const { leftColumnVisible, setLeftColumnVisible } = useLeftColumn();
    const { fetchYouTubeData } = useYouTubeData();

    const [whichCard, setWhichCard] = useState<number>(1000);


    return (
        <>
            <styled.Container visible={leftColumnVisible} >
                <styled.ItemContainer>
                    {fetchYouTubeData.map((data, i) => whichCard == i ? <FoldersCard key = {i} youtubeData={data} close = {() => setWhichCard(100)} /> : <SearchCard key={i} youtubeData={data} onClick = {() => setWhichCard(i)} />)}
                </styled.ItemContainer>
            </styled.Container>
            <styled.ArrowIconContainer visible={leftColumnVisible} onClick={() => setLeftColumnVisible(!leftColumnVisible)}>
                {leftColumnVisible ? <styled.ArrowLeftIcon /> : <styled.ArrowRightIcon />}
            </styled.ArrowIconContainer>
        </>
    )
}

export default LeftColumnFilesLibrary;