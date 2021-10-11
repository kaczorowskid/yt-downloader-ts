import React, { useEffect, useState } from 'react';
import * as styled from './Library.styled';
import Folder from '../Folder/Folder';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import axios from 'axios';
import { config } from '../../config';

const Library: React.FC = () => {

    const { addFolderPath, getAllFoldersPath, deleteFolderPath } = config.url.folder;

    const { state } = useCurrentUser();

    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [folderNameInput, setFolderNameInput] = useState<string>('');
    const [folders, setFolders] = useState<Array<any>>([])
    const [deleteFolder, setDeleteFolder] = useState<boolean>(false);
    const [isAdded, setIsAdded] = useState<boolean>(false);

    const addFolder = () => {
        axios.post(addFolderPath, null, {
            params: {
                id: state.userData.id,
                title: folderNameInput
            }
        })
            .then(() => setIsClicked(false))
            .then(() => setIsAdded(prev => !prev))
            .catch(e => console.log(e))
    }

    const removeFolder = (val: any) => {
        axios.delete(deleteFolderPath, {
            params: { id: state.userData.id, name: val }
        }).then(() => setDeleteFolder(prev => !prev))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if (state.isLogged) {
            axios.get(getAllFoldersPath, {
                params: {
                    id: state.userData.id
                }
            })
                .then((res: any) => setFolders(res.data.data))
        }
    }, [state, deleteFolder, isAdded])


    return (
        <>
            {state.isLogged ?
                <styled.Container>
                    <styled.FoldersContainer>
                        {folders.map((folder, i) => <Folder key={i} removeFolder = {removeFolder} folderName={folder.title} />)}
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
                            {/* {addFolerInfo && (
                                <styled.AddedFolder>
                                    <styled.AddedIcon />
                                </styled.AddedFolder>
                            )} */}
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