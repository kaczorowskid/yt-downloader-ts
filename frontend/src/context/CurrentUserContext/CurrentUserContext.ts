import { createContext } from 'react'
import { ILoginReducerState } from '../../types/ILoginReducerState';
import { ILoginAction } from '../../types/ILoginAction';

interface ICurrentUserContext {
    state: ILoginReducerState
    dispatch: (val: ILoginAction) => void
}

export const CurrentUserContext = createContext<ICurrentUserContext>({
    state: {
        isLogged: false,
        userData: {
            id: 0,
            email: ''
        }
    },
    dispatch: () => {}
})