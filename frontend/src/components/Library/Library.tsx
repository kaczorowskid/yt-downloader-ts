import React, { useState } from 'react';
import * as styled from './Library.styled';
import Folder from '../Folder/Folder';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import axios from 'axios';
import { config } from '../../config';
import { useLibraryData } from '../../hooks/useLibraryData';

const Library: React.FC = () => {

    const { addFolderPath, deleteFolderPath } = config.url.folder;

    const { state } = useCurrentUser();
    const { libraryChange, setLibraryChange, libraryFolders } = useLibraryData();


    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [folderNameInput, setFolderNameInput] = useState<string>('');


    const addFolder = () => {
        axios.post(addFolderPath, null, {
            params: {
                id: state.userData.id,
                title: folderNameInput
            }
        })
            .then(() => setIsClicked(false))
            .then(() => setLibraryChange(!libraryChange))
            .catch(e => console.log(e))
    }

    const removeFolder = (val: string) => {
        axios.delete(deleteFolderPath, {
            params: { id: state.userData.id, title: val }
        }).then(() => setLibraryChange(!libraryChange))
            .catch(e => console.log(e))
    }

    return (
        <>
            {state.isLogged ?
                <styled.Container>
                    <styled.FoldersContainer>
                        {libraryFolders.map((folder, i) => <Folder key={i} removeFolder = {removeFolder} folderName={folder.title} />)}
                        <styled.AddFolderContainer>
                            {!isClicked ? (
                                <>
                                    <styled.AddFolderIcon onClick={() => setIsClicked(true)} />
                                    <styled.AddFolderFooterContainer>
                                        <styled.AddFolderTitle>Add folder</styled.AddFolderTitle>
                                    </styled.AddFolderFooterContainer>
                                </>
                            ) : (
                                <>
                                    <styled.AddFolderInput onChange={e => setFolderNameInput(e.target.value)} />
                                    <styled.AddFolderFooterContainer>
                                        <styled.Button bgColor={'red'} onClick={addFolder} >Add folder</styled.Button>
                                        <styled.Button bgColor={'#512bd4'} onClick={() => setIsClicked(false)} >Cancel</styled.Button>
                                    </styled.AddFolderFooterContainer>
                                </>
                            )}
                        </styled.AddFolderContainer>
                    </styled.FoldersContainer>
                </styled.Container> :
                <styled.NoLoggedUserContainer>
                    <styled.NoUserLoggedWarning>Library is not not available. You must be logged!</styled.NoUserLoggedWarning>
                </styled.NoLoggedUserContainer>
            }
        </>
    )
}

export default Library;