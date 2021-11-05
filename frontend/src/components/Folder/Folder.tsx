import React from 'react';
import * as styled from './Folder.styled';
import { useCurrentFolder } from '../../hooks/useCurrentFolder'

interface Props {
    folderName: string,
    removeFolder: (val: string) => void,
    param: number

}

const Folder: React.FC<Props> = ({ folderName, removeFolder, param }) => {

    const { setCurentlyFolderViev } = useCurrentFolder();

    return (
        <>
            <styled.FolderContainer onClick = {() => setCurentlyFolderViev(param)} >
                <styled.DataContainer>
                    <styled.FolderName>{folderName}</styled.FolderName>
                    <styled.ItemsCount onClick={() => removeFolder(folderName)} >
                        <styled.RemoveIcon />
                    </styled.ItemsCount>
                </styled.DataContainer>
            </styled.FolderContainer>
           
        </>
    )
}

export default Folder;