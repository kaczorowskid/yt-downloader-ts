import React, { createContext } from 'react'

interface ILibraryContentContext {
    libraryFolders: Array<any>,
    setLibraryFolders: (val: any) => void
    libraryChange: boolean
    setLibraryChange: (val: any) => void
}

export const LibraryContentContext = createContext<ILibraryContentContext>({
    libraryFolders: [],
    setLibraryFolders: () => {},
    libraryChange: false,
    setLibraryChange: () => {}
})