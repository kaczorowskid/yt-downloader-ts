import React, { useEffect, useReducer } from 'react'
import { CurrentUserContext } from './CurrentUserContext';
import { loginReducer, initialState } from '../../reducers/loginReducer'
import { config } from '../../config'
import { loginReducerAction } from '../../reducers/loginReducer';
import { callApi } from '../../helper/callApi';
import { errorLogger } from '../../helper/errorLogger';

interface Props {
    children: React.ReactNode
}

const CurrentUserContextProvider: React.FC<Props> = ({ children }) => {

    const { meRefresh } = config.url.user;

    const [state, dispatch] = useReducer(loginReducer, initialState);

    useEffect(() => {
        const fetchUser = async () => {
            const { response, err } = await callApi(meRefresh, 'GET', {});
            if (response) dispatch({ type: loginReducerAction.REFRESH, id: response.data.id, email: response.data.email, active: response.data.active })
            if (err) errorLogger(err);
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