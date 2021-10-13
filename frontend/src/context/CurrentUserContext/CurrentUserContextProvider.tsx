import React, { useEffect, useReducer } from 'react'
import { CurrentUserContext } from './CurrentUserContext';
import { loginReducer, initialState } from '../../reducers/loginReducer'
import axios from 'axios';
import { config } from '../../config' 
import { loginReducerAction } from '../../reducers/loginReducer';

interface Props {
    children: React.ReactNode
}

const CurrentUserContextProvider: React.FC<Props> = ({children}) => {

    const { meRefresh } = config.url.user;

    const [state, dispatch] = useReducer(loginReducer, initialState);

    useEffect(() => {
        const fetchDataCurrentUser = () => {
            axios.get(meRefresh)
            .then((res: any) => dispatch({type: loginReducerAction.REFRESH, id: res.data.id, email: res.data.email}))
            .catch(e => console.log(e))
        }

        fetchDataCurrentUser();
    }, [])

    return (
        <CurrentUserContext.Provider value = {{state, dispatch}}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserContextProvider;