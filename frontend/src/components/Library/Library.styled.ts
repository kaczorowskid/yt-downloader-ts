import styled from 'styled-components';
import { AddToQueue } from '@styled-icons/boxicons-regular';
import { CheckCircleOutline } from '@styled-icons/material-rounded';

export const Container = styled.div`
    position: relative;
    top: 150px;
    width: 100%;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
`;

export const FoldersContainer = styled.div`
    width: 80%;
    min-height: 100vh;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    column-gap: 5px;
    row-gap: 5px;
    align-items: center;
    margin-top: 100px;
`; 

export const NoLoggedUserContainer = styled.div`
    position: relative;
    top: 150px;
    width: 100%;
    height: 50vh;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`;

export const NoUserLoggedWarning = styled.div`
    font-size: 40px;
`;

export const AddFolderContainer = styled.div`
    width: 95%;
    height: 95%;
    background: #141414;
    position: relative;
`;

export const AddFolderFooterContainer = styled.div`
    height: 20%;
    width: 100%;
    background: red;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
`;

export const AddFolderInput = styled.input`
    width: 90%;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Button = styled.button<{bgColor: string}>`
    width: 50%;
    height: 100%;
    background: none;
    border: none;
    background: ${props => props.bgColor};
    color: white;
    font-weight: bold;
`;

export const AddFolderTitle = styled.div`
    color: white;
    font-weight: bold;
    padding-left: 10px;
`;

export const AddFolderIcon = styled(AddToQueue)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    color: white;
    cursor: pointer;
`;

export const AddedFolder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: green;
    z-index: 1;
`;

export const AddedIcon = styled(CheckCircleOutline)`
    width: 70px;
    height: 70px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
