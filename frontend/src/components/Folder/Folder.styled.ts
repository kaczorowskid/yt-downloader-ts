import styled from 'styled-components';
import { RemoveCircleOutline } from '@styled-icons/material-outlined';


export const FolderContainer = styled.div`
    width: 95%;
    height: 95%;
    border-radius: 5px;
    display: flex;
    align-items: flex-end;
    border: 1px solid #3c3c3c;
    background: #141414;
`;

export const DataContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    border: 2px solid #3c3c3c;
`;

export const FolderName = styled.div`
    width: 80%;
    height: 100%;
    border: 1px solid #3c3c3c;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: white;
    font-weight: bold;
    background: #512bd4;
`;

export const ItemsCount = styled.div`
    width: 20%;
    height: 100%;
    border: 1px solid #3c3c3c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
`;

export const RemoveIcon = styled(RemoveCircleOutline)`
    color: white;
    width: 30px;
    height: 30px;
`;