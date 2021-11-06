import React, { useEffect, useState } from 'react';
import * as styled from './Library.styled';
import LibraryCard from '../LibraryCard/LibraryCard';
import { useLibraryData } from '../../hooks/useLibraryData';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { config } from '../../config';
import { useCurrentFolder } from '../../hooks/useCurrentFolder';
import { IYoutubeData } from '../../types/IYoutubeData';
import { callApi } from '../../helper/callApi';

interface Props {
    id: string
}

const Library: React.FC<Props> = ({ id }) => {

    const { deleteFolderPath, addFolderPath } = config.url.folder
    const { getAllDataPath, deleteDataPath } = config.url.data

    const { setLibraryChange, libraryFolders } = useLibraryData();
    const { state } = useCurrentUser();
    const { currentlyFolderView, setCurentlyFolderViev } = useCurrentFolder();

    const [addFolderVisible, setAddFolderVisible] = useState<boolean>(false);
    const [folderNameInput, setFolderNameInput] = useState<string>('');
    const [dataInFolder, setDataInFolder] = useState<Array<IYoutubeData>>([])
    const [currentFolderCheck, setCurrentFolderCheck] = useState<number>(0);
    const [filterFolders, setFilterFolders] = useState(libraryFolders)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await callApi(getAllDataPath, 'GET', { id: currentlyFolderView })
                response && setDataInFolder(response.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
        setFilterFolders(libraryFolders)
    }, [currentlyFolderView, libraryFolders])


    const handleFilterFolders = (val: string) => {
        const result = libraryFolders.filter((data) => data.title.search(val) !== -1)
        setFilterFolders(result);
    }


    const removeFolder = async (folderTitle: string) => {

        try {
            const response = await callApi(deleteFolderPath, 'DELETE', {
                id: state.userData.id,
                title: folderTitle
            })

            response && setLibraryChange(libraryFolders.filter(folder => folder.title !== folderTitle))
        } catch (e) {
            console.log(e)
        }
        
        try {
            await callApi(deleteDataPath, 'DELETE', {
                id: dataInFolder.map(i => i.id)
            })
        } catch (e) {
            console.log(e)
        }
    }

    const addFolder = async () => {
        try {
            const response = await callApi(addFolderPath, 'POST', {
                id: state.userData.id,
                title: folderNameInput
            })

            response && setLibraryChange([...libraryFolders, response.data])
        } catch (e) {
            console.log(e)
        }
    }

    const removeItemFromFolder = async (id: number) => {
        try {
            const response = await callApi(deleteDataPath, 'DELETE', { id })
            response && setDataInFolder(dataInFolder.filter(data => data.id !== id));
        } catch (e) {
            console.log(e)
        }
    }

    const handleClickFolderItem = (id: number, index: number) => {
        setCurentlyFolderViev(id)
        setCurrentFolderCheck(index + 1)
    }

    return (
        <>
            <styled.Container id={id}>
                <styled.FolderListWrapper>
                    <styled.FolderListContainer>
                        <styled.InputContainer>
                            <styled.Input placeholder = 'Search folder' onChange = {e => handleFilterFolders(e.target.value)} />
                        </styled.InputContainer>
                        <styled.AddFolderContainer>
                            {addFolderVisible ? (
                                <>
                                    <styled.Input placeholder='Folder name' onChange={e => setFolderNameInput(e.target.value)} value={folderNameInput} />
                                    <styled.ButtonContainer>
                                        <styled.Button onClick={addFolder} >Add</styled.Button>
                                        <styled.Button onClick={() => setAddFolderVisible(false)} >Cancel</styled.Button>
                                    </styled.ButtonContainer>
                                </>
                            ) : (
                                <styled.AddFolderIcon onClick={() => setAddFolderVisible(true)} />
                            )}
                        </styled.AddFolderContainer>
                        <styled.ItemListContainer currentClick={currentFolderCheck}>
                            {filterFolders.map((folder, i) => (
                                <styled.FolderItem key={i} folderTitle={folder.title} onClick={() => handleClickFolderItem(folder.id, i)} >
                                    <styled.RemoveIcon onClick={() => removeFolder(folder.title)} />
                                </styled.FolderItem>
                            ))}
                        </styled.ItemListContainer>
                    </styled.FolderListContainer>
                </styled.FolderListWrapper>
                <styled.AllItemsWrapper>
                {dataInFolder.length !== 0 && <styled.AllItemsContainer>
                        <styled.ItemContainer>
                            {dataInFolder.map((data, i) => <LibraryCard key={i} data={data} removeItem={() => removeItemFromFolder(data.id)} />)}
                        </styled.ItemContainer>
                    </styled.AllItemsContainer>}
                </styled.AllItemsWrapper>
            </styled.Container>
        </>
    )
}

export default Library;