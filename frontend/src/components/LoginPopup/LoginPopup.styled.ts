import styled from 'styled-components'

export const Container = styled.div<{changeTheme: boolean}>`
    position: fixed;
    top: ${props => props.changeTheme ? '100px' : '130px'};
    right: 250px;
    width: 300px;
    height: 200px;
    /* background: #414141; */
    background: #ababab;
    border-radius: 5px;
    z-index: 2;
    font-family: 'Roboto', sans-serif;
    transition: all 1s ease;
    box-shadow: 0 0 15px white;
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
    color: black;
    padding-left: 10px;
`;

export const ButtonLoginContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;

`;

export const RegisterLink = styled.span`
    font-size: 15px;
    color: blue;
`;

export const LoginButton = styled.button`
    width: 40%;
    height: 40px;
    border: 2px solid black;
    background: none;
    color: black;
    border-radius: 20px;

    &:hover {
        background: #656565;
    }
`;