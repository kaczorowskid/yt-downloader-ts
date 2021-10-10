import React from 'react';
import * as styled from './Folder.styled';

const Folder: React.FC = () => {
    return (
        <styled.FolderContainer>
            <styled.DataContainer>
                <styled.FolderName>Test</styled.FolderName>
                <styled.ItemsCount>32</styled.ItemsCount>
            </styled.DataContainer>
        </styled.FolderContainer>
    )
}

export default Folder;