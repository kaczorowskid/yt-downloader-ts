import React from 'react';
import * as styled from './LeftColumnFilesLibrary.styled';
import { useLeftColumn } from '../../hooks/useLeftColumn';
import Card from '../Card/Card';
import { useYouTubeData } from '../../hooks/useYouTubeData';

interface Props {
    folders: Array<any>
}

const LeftColumnFilesLibrary: React.FC<Props> = ({folders}) => {

    const { leftColumnVisible, setLeftColumnVisible } = useLeftColumn();
    const { fetchYouTybeData } = useYouTubeData();

    return (
        <>
            <styled.Container visible = {leftColumnVisible} >
                <styled.ItemContainer>
                    {fetchYouTybeData.map((data, i) => <Card key = {i} youtubeData = {data} />)}
                </styled.ItemContainer>
            </styled.Container>
            <styled.ArrowIconContainer visible = {leftColumnVisible} onClick = {() => setLeftColumnVisible((prev: boolean) => !prev)} >
                {leftColumnVisible ? <styled.ArrowLeftIcon /> : <styled.ArrowRightIcon />}
            </styled.ArrowIconContainer>
        </>
    )
}

export default LeftColumnFilesLibrary;