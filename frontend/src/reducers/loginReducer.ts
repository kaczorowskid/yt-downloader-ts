import { ILoginReducerState } from '../types/ILoginReducerState'
import { ILoginAction } from '../types/ILoginAction'

export const initialState: ILoginReducerState = {
    isLoading: true,
    isLogged: false,
    userData: {
        id: 0,
        email: ''
    }
}

export const loginReducerAction = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REFRESH: 'REFRESH'
}

export const loginReducer = (state: any, action: ILoginAction) => {
    switch (action.type) {
        case loginReducerAction.LOGIN:
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                userData: {
                    id: action.id,
                    email: action.email
                }
            }

        case loginReducerAction.REFRESH:
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                userData: {
                    id: action.id,
                    email: action.email
                }
            }

        case loginReducerAction.LOGOUT:
            return {
                isLogged: false,
                userData: {}
            }

        default:
            return state;
    }
}