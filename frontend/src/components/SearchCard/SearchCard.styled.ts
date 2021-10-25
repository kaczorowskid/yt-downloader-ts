import styled, { css } from 'styled-components';
import { RemoveCircleOutline, DownloadForOffline } from '@styled-icons/material-outlined';
import { CheckCircleOutline } from '@styled-icons/material-rounded';

// export const Container = styled.div`
//     width: 90%;
//     height: 200px;
//     background: #424242;
//     border-radius: 10px;
//     margin: 10px 0;
//     display: flex;
//     overflow: hidden;
//     font-family: 'Roboto', sans-serif;
// `;

// export const ItemContainer = styled.div`
//     width: 90%;
//     height: 100%;
//     display: flex;
//     align-items: center;
// `;

// export const ImageContainer = styled.div`
//     width: 40%;
//     height: 100%;
// `;

// export const Image = styled.img`
//     width: 100%;
//     height: 100%;
// `;

// export const DataContainer = styled.div`
//     width: 60%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// export const Title = styled.div`
//     color: white;
//     font-size: 20px;
// `;

// export const IconContainer = styled.div`
//     width: 10%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-around;
// `;

// const iconStyle = css`
//     width: 30px;
//     height: 30px;
//     color: white;
//     cursor: pointer;
// `;

// export const RemoveIcon = styled(RemoveCircleOutline)`${iconStyle}`;
// export const DownloadIcon = styled(DownloadForOffline)`${iconStyle}`;
// export const SaveIcon = styled(CheckCircleOutline)`${iconStyle}`;

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
    background: #ff4906;
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