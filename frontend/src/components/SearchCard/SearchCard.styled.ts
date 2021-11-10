import styled, { css } from 'styled-components';
import { RemoveCircleOutline, DownloadForOffline } from '@styled-icons/material-outlined';
import { CheckCircleOutline } from '@styled-icons/material-rounded';

export const Container = styled.div`
    width: 80%;
    height: 500px;
    margin: 20px 0;
    font-family: 'Roboto', sans-serif;
    border-radius: 10px;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 60%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Title= styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    text-align: center;
    background: white;
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 10%;
    background: orange;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const iconStyle = css`
    width: 35px;
    height: 35px;
    color: black;
    cursor: pointer;
`;

export const RemoveIcon = styled(RemoveCircleOutline)`${iconStyle}`;
export const DownloadIcon = styled(DownloadForOffline)`${iconStyle}`;
export const SaveIcon = styled(CheckCircleOutline)`${iconStyle}`;