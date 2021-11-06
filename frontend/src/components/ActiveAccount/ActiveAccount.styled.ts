import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70vh;
    background: #16161d;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`;

export const Warning = styled.div`
    color: white;
    font-size: 40px;
`;

export const Message = styled.span`
    font-size: 30px;
    color: white;
`;