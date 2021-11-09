import React, { useEffect, useReducer } from 'react'
import { CurrentUserContext } from './CurrentUserContext';
import { loginReducer, initialState } from '../../reducers/loginReducer'
import { config } from '../../config'
import { loginReducerAction } from '../../reducers/loginReducer';
import { callApi } from '../../helper/callApi';

interface Props {
    children: React.ReactNode
}

const CurrentUserContextProvider: React.FC<Props> = ({ children }) => {

    const { meRefresh } = config.url.user;

    const [state, dispatch] = useReducer(loginReducer, initialState);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await callApi(meRefresh, 'GET', {});
                response && dispatch({ type: loginReducerAction.REFRESH, id: response.response.data.id, email: response.response.data.email, active: response.response.data.active })
            } catch (e) {
                console.log(e)
            }
        }

        fetchUser();
    }, [])


    return (
        <CurrentUserContext.Provider value={{ state, dispatch }}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserContextProvider;