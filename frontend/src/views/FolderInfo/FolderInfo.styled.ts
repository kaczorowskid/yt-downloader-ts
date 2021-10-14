import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 30vh;
    z-index: 1;
    background: #1e1e1e;
    overflow-x: scroll;
`;

export const Container = styled.div`
    min-width: 100vw;
    height: 30vh;
    background: #1e1e1e;
    display: inline-flex;
    align-items: center;
`;

export const Card = styled.div`
    width: 40vw;
    height: 90%;
    background: red;
    margin-left: 20px
`;
