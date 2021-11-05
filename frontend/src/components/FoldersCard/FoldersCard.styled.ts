import styled from 'styled-components';
import { CheckCircleOutline } from '@styled-icons/material-rounded';

export const Container = styled.div`
    width: 80%;
    height: 500px;
    margin: 20px 0;
    font-family: 'Roboto', sans-serif;
    border-radius: 10px;
    overflow: hidden;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    width: 100%;
    height: 10%;
    color: #ff5400;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemsContainerWrapper = styled.div`
    width: 100%;
    height: 80%;
    overflow-y: auto;
`;

export const ItemsContainer = styled.div`
    width: 100%;
`;

export const Item = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: gray;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 0px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
 
    &:hover {
        background: gray;
    }
`;

export const AddedIcon = styled(CheckCircleOutline)`
    color: green;
    width: 80px;
    height: 80px;
`;