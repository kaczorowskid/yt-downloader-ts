import React from 'react';
import * as styled from './Card.styled';

const Card: React.FC = () => {
    return (
        <>
        <styled.Container>
            <styled.ItemContainer>
                <styled.ImageContainer>
                    <styled.Image src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
                </styled.ImageContainer>
                <styled.DataContainer>
                    <styled.Title>test</styled.Title>
                </styled.DataContainer>
            </styled.ItemContainer>
            <styled.IconContainer>
                <styled.RemoveIcon />
                <styled.DownloadIcon />
                <styled.SaveIcon />
            </styled.IconContainer>
        </styled.Container>
        </>
    )
}

export default Card;