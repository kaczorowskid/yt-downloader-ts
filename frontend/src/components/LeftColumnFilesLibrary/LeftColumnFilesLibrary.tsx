import React from 'react';
import * as styled from './LeftColumnFilesLibrary.styled';
import { useLeftColumn } from '../../hooks/useLeftColumn';
import Card from '../Card/Card';

const LeftColumnFilesLibrary: React.FC = () => {

    const { leftColumnVisible, setLeftColumnVisible } = useLeftColumn()

    return (
        <>
            <styled.Container visible = {leftColumnVisible} >
                <styled.ItemContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </styled.ItemContainer>
            </styled.Container>
            <styled.ArrowIconContainer visible = {leftColumnVisible} onClick = {() => setLeftColumnVisible((prev: boolean) => !prev)} >
                {leftColumnVisible ? <styled.ArrowLeftIcon /> : <styled.ArrowRightIcon />}
            </styled.ArrowIconContainer>
        </>
    )
}

export default LeftColumnFilesLibrary;