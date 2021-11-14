import { ILoginReducerState } from '../types/ILoginReducerState'
import { ILoginAction } from '../types/ILoginAction'

export const initialState: ILoginReducerState = {
    isLogged: false,
    userData: {
        id: 0,
        email: '',
        active: false
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
                isLogged: true,
                userData: {
                    id: action.id,
                    email: action.email,
                    active: action.active
                }
            }

        case loginReducerAction.REFRESH:
            return {
                ...state,
                isLogged: true,
                userData: {
                    id: action.id,
                    email: action.email,
                    active: action.active
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