import React, { useReducer } from 'react'
import { CurrentUserContext } from './CurrentUserContext';
import { loginReducer, initialState } from '../../reducers/loginReducer'

interface Props {
    children: React.ReactNode
}

const CurrentUserContextProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    return (
        <CurrentUserContext.Provider value = {{state, dispatch}}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserContextProvider;