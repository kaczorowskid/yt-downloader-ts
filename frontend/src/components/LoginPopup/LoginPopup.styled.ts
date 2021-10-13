import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 100px;
    right: 200px;
    width: 200px;
    height: 250px;
    background: #414141;
    border: 1px solid white;
    border-radius: 5px;
    z-index: 2;
    font-family: 'Roboto', sans-serif;
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
    height: 40px;
    border: 2px solid black;
    background: none;
    color: white;
    padding-left: 10px;
`;

export const ButtonLoginContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const RegisterLink = styled.span`
    font-size: 17px;
    color: blue;
`;

export const LoginButton = styled.button`
    width: 90%;
    height: 40px;
    border: 2px solid black;
    background: none;
    color: white;

    &:hover {
        background: #656565;
    }
`;