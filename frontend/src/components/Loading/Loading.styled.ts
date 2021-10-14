import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background: black;
    opacity: 0.9;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;