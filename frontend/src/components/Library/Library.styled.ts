import { RemoveCircleOutline } from '@styled-icons/material-outlined';
import styled, { css } from 'styled-components';
import { AddCircle } from '@styled-icons/fluentui-system-filled'

const iconStyle = css`
    position: absolute;
    right: 20px;
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
`;

export const RemoveIcon = styled(RemoveCircleOutline)`${iconStyle}`;

export const Container = styled.div`
    position: relative;
    top: 150px;
    width: 100%;
    height: calc(100vh - 150px);
    display: flex;
    font-family: 'Roboto', sans-serif;
`;

export const FolderListWrapper = styled.div`
    width: 25%;
    height: 100%;
    background: #16161d;
    overflow-y: auto;
    border-right: 2px solid white;
`;

export const FolderListContainer = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    width: 90%;
    height: 50px;
    background: none;
    border: none;
    border-bottom: 2px solid white;
    color: white;
`;

export const ItemListContainer = styled.div<{currentClick: number}>`
    width: 100%;

    & :nth-child(${props => props.currentClick}):not(${RemoveIcon}) {
        background: black;
    }
`;

export const FolderItem = styled.div<{folderTitle: string}>`
    width: 100%;
    height: 7vh;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 17px;
    position: relative;

    &:hover {
        background: #575757;
    }

    &::before {
        content: '${props => props.folderTitle}';
    }
`;

export const AllItemsWrapper = styled.div`
    width: 75%;
    height: 100%;
    background: #16161d;
    overflow: scroll;
`;

export const AllItemsContainer = styled.div`
    width: 100%;
    min-height: 50vh;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const AddFolderContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
`;

export const Button = styled.button`
    width: 40%;
    height: 30px;
    background: none;
    border: 2px solid white;
    color: white;
`;

export const AddFolderIcon = styled(AddCircle)`
    width: 50px;
    height: 50px;
    color: white;
`;