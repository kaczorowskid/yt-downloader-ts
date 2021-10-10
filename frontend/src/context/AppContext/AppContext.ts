import { createContext } from 'react'

interface IContextApp {
    leftColumnVisible: boolean
    setLeftColumnVisible: (val: any) => void 
}

export const AppContext = createContext<IContextApp>({
    leftColumnVisible: false,
    setLeftColumnVisible: () => {}
})