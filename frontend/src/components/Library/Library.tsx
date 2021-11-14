import React, { useEffect, useState } from 'react';
import * as styled from './Library.styled';
import LibraryCard from '../LibraryCard/LibraryCard';
import { useLibraryData } from '../../hooks/useLibraryData';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { config } from '../../config';
import { useCurrentFolder } from '../../hooks/useCurrentFolder';
import { IYoutubeData } from '../../types/IYoutubeData';
import { callApi } from '../../helper/callApi';
import NoActiveAccount from '../NoActiveAccount/NoActiveAccount'
import { errorLogger } from '../../helper/errorLogger';

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
            const { response, err } = await callApi(getAllDataPath, 'GET', { id: currentlyFolderView })

            if (response) setDataInFolder(response.data);
            if (err) errorLogger(err);
        }

        fetchData();
        setFilterFolders(libraryFolders)
    }, [currentlyFolderView, libraryFolders])


    const handleFilterFolders = (val: string) => {
        const result = libraryFolders.filter((data) => data.title.search(val) !== -1)
        setFilterFolders(result);
    }


    const removeFolder = async (folderTitle: string) => {
        const { response, err } = await callApi(deleteFolderPath, 'DELETE', {
            id: state.userData.id,
            title: folderTitle
        })

        if (response) setLibraryChange(libraryFolders.filter(folder => folder.title !== folderTitle))
        if (err) errorLogger(err);

        if (dataInFolder.length !== 0) {
            const { err: errDelete } = await callApi(deleteDataPath, 'DELETE', {
                id: dataInFolder.map(i => i.id)
            })

            if (errDelete) errorLogger(errDelete);
        }
    }

    const addFolder = async () => {
        const { response, err } = await callApi(addFolderPath, 'POST', {
            id: state.userData.id,
            title: folderNameInput
        })

        if (response) {
            setLibraryChange([...libraryFolders, response.data])
            setFolderNameInput('')
        }
        if (err) errorLogger(err);
    }

    const removeItemFromFolder = async (id: number) => {
        const { response, err } = await callApi(deleteDataPath, 'DELETE', { id })

        if (response) setDataInFolder(dataInFolder.filter(data => data.id !== id));
        if (err) errorLogger(err);
    }

    const handleClickFolderItem = (id: number, index: number) => {
        setCurentlyFolderViev(id)
        setCurrentFolderCheck(index + 1)
    }

    return (
        <>
            {!state.userData.active ? <NoActiveAccount /> : <styled.Container id={id}>
                <styled.FolderListWrapper>
                    <styled.FolderListContainer>
                        <styled.InputContainer>
                            <styled.Input placeholder='Search folder' onChange={e => handleFilterFolders(e.target.value)} />
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
                            {filterFolders.length !== 0 ?
                                (
                                    <>
                                        {filterFolders && filterFolders.map((folder, i) => (
                                            <styled.FolderItem key={i} folderTitle={folder.title} onClick={() => handleClickFolderItem(folder.id, i)} >
                                                <styled.RemoveIcon onClick={() => removeFolder(folder.title)} />
                                            </styled.FolderItem>
                                        ))}
                                    </>
                                ) : <styled.NoFoldersInfo >No folders in library</styled.NoFoldersInfo>}
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
            </styled.Container>}
        </>
    )
}

export default Library;