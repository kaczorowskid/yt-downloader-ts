import React from 'react';
import * as styled from './Folder.styled';

interface Props {
    folderName: string,
    removeFolder: (val: string) => void
}

const Folder: React.FC<Props> = ({ folderName, removeFolder }) => {
    return (
        <styled.FolderContainer>
            <styled.DataContainer>
                <styled.FolderName>{folderName}</styled.FolderName>
                <styled.ItemsCount onClick = {() => removeFolder(folderName)} >
                    <styled.RemoveIcon />
                </styled.ItemsCount>
            </styled.DataContainer>
        </styled.FolderContainer>
    )
}

export default Folder;