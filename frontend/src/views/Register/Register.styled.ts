import styled from 'styled-components'

// export const Container = styled.div`
//     width: 100%;
//     height: 100vh;
//     background: #16161d;
// `;

// export const RegisterContainer = styled.div`
//     width: 40%;
//     height: 40vh;
//     background: #424242;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// `;

// export const InputContainer = styled.div`
//     width: 100%;
//     height: 60%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-evenly;
// `;

// export const Input = styled.input`
//     width: 90%;
//     height: 60px;
// `;

// export const ButtonContainer = styled.div`
//     position: absolute;
//     bottom: 0%;
//     width: 100%;
//     height: 30%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// export const Button = styled.button`
//     width: 90%;
//     height: 60px;
// `;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #16161d;
    display: flex;
    font-family: 'Roboto', sans-serif;
`;

export const Column = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LeftSideContainer = styled.div`
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Title = styled.div`
    color: white;
    font-size: 32px;
`;

export const Description = styled.div`
    color: white;
    font-size: 25px;
`;

export const LoginLinkContainer = styled.div`
    color: orange;
    font-size: 20px;
    text-decoration: underline;
`;

export const LoginLink = styled.span`
    cursor: pointer;    
`;

export const RegisterWindowContainer = styled.div`
    width: 400px;
    height: 350px;
    background: #101010;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #414141;
    overflow: hidden;
`;

export const InputContainer = styled.div`
    width: 90%;
    height: 70px;
`;

export const InputLabel = styled.div`
    height: 20px;
    color: white;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: #313131;
    color: white;
    border: 1px solid orange;
    padding-left: 10px;
`;

export const Button = styled.button`
    width: 90%;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background: orange;

`;

export const ForgotPasswordContainer = styled.div`
    width: 100%;
    height: 60px;
    border-top: 1px solid #414141;
    position: relative;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ForgotPasswordLink = styled.div`
    text-decoration: underline;
    font-size: 15px;
    color: orange;
`;

export const Error = styled.span`
    color: red;
`;