import { DownloadForOffline, RemoveCircleOutline } from '@styled-icons/material-outlined';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 31%;
    height: 40vh;
    margin: 20px 10px;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
    background: #353535;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Title= styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    text-align: center;
    color: white;
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const iconStyle = css`
    width: 35px;
    height: 35px;
    color: white;
    cursor: pointer;
    position: absolute;
`;

export const RemoveIcon = styled(RemoveCircleOutline)`
    ${iconStyle};
    right: 10px;
    top: 10px;
`;
export const DownloadIcon = styled(DownloadForOffline)`
    ${iconStyle};
    left: 10px;
    top: 10px;
`;