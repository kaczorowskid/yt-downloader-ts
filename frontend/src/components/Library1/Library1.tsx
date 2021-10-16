import React, { useEffect, useState } from 'react';
import * as styled from './Library1.styled';

import Card1 from '../Card1/Card1';
import { useLibraryData } from '../../hooks/useLibraryData';
import axios from 'axios';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { config } from '../../config';
import { useCurrentFolder } from '../../hooks/useCurrentFolder';
import { IYoutubeData } from '../../types/IYoutubeData';

const Library1: React.FC = () => {

    const { deleteFolderPath, addFolderPath } = config.url.folder
    const { getAllDataPath } = config.url.data

    const { libraryChange, setLibraryChange, libraryFolders } = useLibraryData();
    const { state } = useCurrentUser();
    const { currentlyFolderView, setCurentlyFolderViev } = useCurrentFolder();

    const [addFolderVisible, setAddFolderVisible] = useState<boolean>(false);
    const [folderNameInput, setFolderNameInput] = useState<string>('');
    const [dataInFolder, setDataInFolder] = useState<Array<IYoutubeData>>([])

    const removeFolder = (val: string) => {
        axios.delete(deleteFolderPath, {
            params: { id: state.userData.id, title: val }
        }).then(() => setLibraryChange(!libraryChange))
            .catch(e => console.log(e))
    }

    const addFolder = () => {
        axios.post(addFolderPath, null, {
            params: {
                id: state.userData.id,
                title: folderNameInput
            }
        })
            .then(() => setLibraryChange(!libraryChange))
            .then(() => setFolderNameInput(''))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        axios.get(getAllDataPath, {
            params: {
                id: currentlyFolderView
            }
        })
        .then(res => setDataInFolder(res.data))
    }, [currentlyFolderView])

    return (
        <>
            <styled.Container>
                <styled.FolderListWrapper>
                    <styled.FolderListContainer>
                        <styled.InputContainer>
                            <styled.Input />
                        </styled.InputContainer>
                        <styled.AddFolderContainer>
                            {addFolderVisible ? (
                                <>
                                    <styled.Input placeholder='Folder name' onChange = {e => setFolderNameInput(e.target.value)} value = {folderNameInput} />
                                    <styled.ButtonContainer>
                                        <styled.Button onClick = {addFolder} >Add</styled.Button>
                                        <styled.Button onClick = {() => setAddFolderVisible(false)} >Cancel</styled.Button>
                                    </styled.ButtonContainer>
                                </>
                            ) : (
                                <styled.AddFolderIcon onClick={() => setAddFolderVisible(true)} />
                            )}
                        </styled.AddFolderContainer>
                        {libraryFolders.map((folder, i) => (
                            <styled.FolderItem key={i} onClick = {() => setCurentlyFolderViev(folder.id)} >
                                {folder.title}
                                <styled.RemoveIcon onClick={() => removeFolder(folder.title)} />
                            </styled.FolderItem>
                        ))}
                    </styled.FolderListContainer>
                </styled.FolderListWrapper>
                <styled.AllItemsWrapper>
                    <styled.AllItemsContainer>
                        <styled.ItemContainer>
                            {dataInFolder.map((data, i) => <Card1 key = {i} data = {data}/>)}
                        </styled.ItemContainer>
                    </styled.AllItemsContainer>
                </styled.AllItemsWrapper>
            </styled.Container>
        </>
    )
}

export default Library1;