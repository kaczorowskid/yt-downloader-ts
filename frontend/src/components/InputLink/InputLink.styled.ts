import { Search } from '@styled-icons/bootstrap';
import styled from 'styled-components'
import { device } from '../../helper/deviceSize';

export const Container = styled.div`
    position: relative;
    top: 150px;
    height: calc(100vh - 150px);
    width: 100%;
    background: #16161d;
    font-family: 'Roboto', sans-serif;
`;

export const Header = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: white;
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
`;

export const InputWrapper = styled.div`
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 70px;
    border: 1px solid orange;
    display: flex;

    @media only screen and (${device.laptop}) {
        width: 90%;
    }
`;

export const Title = styled.div`
    color: white;
    font-size: 25px;
`;

export const Input = styled.input`
    height: 100%;
    width: 90%;
`;

export const SearchIconContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media only screen and (${device.laptop}) {
        width: 15%;
    }
`;

export const SearchIcon = styled(Search)`
    color: orange;
    width: 35px;
    height: 35px;
`;