import styled from 'styled-components';
import { device } from '../../helper/deviceSize';

export const Container = styled.div`
    position: fixed;
    bottom: 0px;
    transform: translate(0, 50%);
    right: 60px;
    width: 400px;
    min-height: 200px;
    font-family: 'Roboto', sans-serif;
    z-index: 10;

    @media only screen and (${device.laptop}) {
        width: 90%;
        left: 50%;
        transform: translate(-50%, 50%);
    }
`;

export const Item = styled.div`
    width: 100%;
    height: 80px;
    background: white;
    margin: 5px 0;
    border-radius: 20px;
    background: #1e1e1e;
    border: 1px solid orange;
`;

export const DownloadFileTitle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: orange;
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProgressBarBackground = styled.div`
    width: 90%;
    height: 30px;
    background: #616161;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`;

export const Percent = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
`;

export const ProgressBarFiller = styled.div<{progress: number}>`
    background: orange;
    height: 100%;
    width: ${props => props.progress}%;
`;