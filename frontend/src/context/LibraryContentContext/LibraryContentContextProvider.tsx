import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from '../../config';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { LibraryContentContext } from './LibraryContentContext';
import { IFolder } from '../../types/IFolder'
import { callApi } from '../../helper/callApi';

interface Props {
    children: React.ReactNode
}

const LibraryContentContextProvider: React.FC<Props> = ({ children }) => {

    const { getAllFoldersPath } = config.url.folder;

    const { state } = useCurrentUser();

    const [libraryFolders, setLibraryFolders] = useState<Array<IFolder>>([]);
    const [libraryChange, setLibraryChange] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                if (state.isLogged) {
                    const response = await callApi(getAllFoldersPath, 'GET', { id: state.userData.id })
                    response.data && setLibraryFolders(response.data.data)
                }
            } catch (e) {
                console.log(e)
            }
        })()
    }, [state, libraryChange])

    const value = {
        libraryFolders,
        setLibraryFolders,
        libraryChange,
        setLibraryChange
    }

    return (
        <LibraryContentContext.Provider value={value}>
            {children}
        </LibraryContentContext.Provider>
    )
}

export default LibraryContentContextProvider;