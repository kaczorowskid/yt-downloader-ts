import styled, { css } from 'styled-components';
import { RemoveCircleOutline, DownloadForOffline } from '@styled-icons/material-outlined';
import { CheckCircleOutline } from '@styled-icons/material-rounded';

export const Container = styled.div`
    width: 90%;
    height: 200px;
    background: #424242;
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    overflow: hidden;
`;

export const ItemContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 40%;
    height: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const DataContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    color: white;
    font-size: 20px;
`;

export const IconContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const iconStyle = css`
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
`;

export const RemoveIcon = styled(RemoveCircleOutline)`${iconStyle}`;
export const DownloadIcon = styled(DownloadForOffline)`${iconStyle}`;
export const SaveIcon = styled(CheckCircleOutline)`${iconStyle}`;