import React, { createContext } from 'react'
import { IFolder } from '../../types/IFolder'

interface ILibraryContentContext {
    libraryFolders: Array<IFolder>,
    setLibraryFolders: (val: Array<IFolder>) => void
    libraryChange: boolean
    setLibraryChange: (val: boolean) => void
}

export const LibraryContentContext = createContext<ILibraryContentContext>({
    libraryFolders: [],
    setLibraryFolders: () => {},
    libraryChange: false,
    setLibraryChange: () => {}
})