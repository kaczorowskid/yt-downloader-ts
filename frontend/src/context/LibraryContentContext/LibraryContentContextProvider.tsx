import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from '../../config';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { LibraryContentContext } from './LibraryContentContext';
import { IFolder } from '../../types/IFolder'

interface Props {
    children: React.ReactNode
}

const LibraryContentContextProvider: React.FC<Props> = ({ children }) => {

    const { getAllFoldersPath } = config.url.folder;

    const { state } = useCurrentUser();

    const [ libraryFolders, setLibraryFolders ] = useState<Array<IFolder>>([]);
    const [ libraryChange, setLibraryChange ] = useState<boolean>(false)

    useEffect(() => {
        if (state.isLogged) {
            axios.get(getAllFoldersPath, {
                params: {
                    id: state.userData.id
                }
            })
                .then((res: any) => setLibraryFolders(res.data.data))
        }
    }, [state, libraryChange])


    const value = {
        libraryFolders,
        setLibraryFolders,
        libraryChange,
        setLibraryChange
    }

    return (
        <LibraryContentContext.Provider value = {value}>
            {children}
        </LibraryContentContext.Provider>
    )
}

export default LibraryContentContextProvider;