import { createContext } from 'react'

interface ICurrentUserContext {
    state: any
    dispatch: (val: any) => void
}

export const CurrentUserContext = createContext<ICurrentUserContext>({
    state: {},
    dispatch: () => {}
})