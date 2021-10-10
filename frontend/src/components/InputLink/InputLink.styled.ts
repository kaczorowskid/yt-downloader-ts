import { Search } from '@styled-icons/bootstrap';
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    top: 150px;
    height: calc(100vh - 150px);
    width: 100%;
    background: #16161d;
    font-family: 'Roboto', sans-serif;
`;

export const InputWrapper = styled.div`
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 70px;
    border: 1px solid white;
    display: flex;

    &::before {
        content: 'Music from YouTube';
        color: white;
        position: absolute;
        top: -80px;
        left: 25%;
        font-size: 45px;
        font-weight: bold;
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
`;

export const SearchIcon = styled(Search)`
    color: white;
    width: 35px;
    height: 35px;
`;