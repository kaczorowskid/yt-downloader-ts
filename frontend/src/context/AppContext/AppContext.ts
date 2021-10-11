import { createContext } from 'react'

interface IContextApp {
    leftColumnVisible: boolean
    setLeftColumnVisible: (val: any) => void 
    scrollValue: number
    setScrollValue: (val: any) => void
    fetchYouTybeData: Array<any>
    setFetchYouTubeData: (val: any) => void
}

export const AppContext = createContext<IContextApp>({
    leftColumnVisible: false,
    setLeftColumnVisible: () => {},
    scrollValue: 0,
    setScrollValue: () => {},
    fetchYouTybeData: [],
    setFetchYouTubeData: () => {},
})