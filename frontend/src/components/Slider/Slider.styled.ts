import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    width: 100%;
    overflow: hidden;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
`;

export const Container = styled.div<{ count?: number, arrayLen?: number }>`
    overflow: hidden;
    width: calc(${props => props.arrayLen} * 100%);
    height: 30vh;
    overflow: hidden;
    display: flex;
    margin-left: calc(20.5vw + (-43vw * ${props => props.count}));
    transition: all .5s ease;
`;

export const Item = styled.div<{ background?: string, title?: string }>`
    width: 40vw;
    background: url('${props => props.background}');
    margin: 0px 50px;
    border-radius: 30px;
    border: 2px solid green;

    &::before {
        content: 'test';
        color: white;
        position: relative;
        top: 30px;
        left: 10%;
        font-size: 25px;
        border: 2px solid red;
        padding: 5px 30px;
        border-radius: 20px;
    }
`;

const buttonStyle = css`
    position: absolute;
    height: 50vh;
    width: 10vw;
`;

export const LeftButton = styled.div`
    ${buttonStyle};
`;

export const RightButton = styled.div`
    ${buttonStyle};
    right: 0;
`;

export const Info = styled.div`
    position: relative;
    top: calc(100% - 40%);
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
    height: 30%;
    border: 1px solid red;
    border-radius: 10px;
    color: white;
    background: black;
    opacity: 0.5;
`;