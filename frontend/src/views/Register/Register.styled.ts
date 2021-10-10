import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #16161d;
`;

export const RegisterContainer = styled.div`
    width: 40%;
    height: 40vh;
    background: #424242;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Input = styled.input`
    width: 90%;
    height: 60px;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    width: 90%;
    height: 60px;
`;