import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 0px;
    right: 60px;
    width: 400px;
    min-height: 200px;
    font-family: 'Roboto', sans-serif;
    z-index: 10;
    /* border: 1px solid red; */
`;

export const Item = styled.div`
    width: 100%;
    height: 80px;
    background: white;
    margin: 5px 0;
    border-radius: 20px;
`;

export const DownloadFileTitle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background: #e0e0de;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`;

export const Percent = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
`;

export const ProgressBarFiller = styled.div<{progress: number}>`
    background: blue;
    height: 100%;
    width: ${props => props.progress}%;
`;