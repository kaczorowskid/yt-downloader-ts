import styled from 'styled-components'
import { device } from '../../helper/deviceSize'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #16161d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`;

export const InfoContainer = styled.div`
    width: 40%;
    height: 50%;
    background: #101010;
    border-radius: 10px;
    border: 1px solid #414141;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (${device.laptop}) {
        width: 90%;
    }
`;

export const Info = styled.div`
    font-size: 30px;
    color: white;
`;