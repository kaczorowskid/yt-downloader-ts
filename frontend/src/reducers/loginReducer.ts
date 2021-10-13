import { ILoginReducerState } from '../types/ILoginReducerState'
import { ILoginAction } from '../types/ILoginAction'

export const initialState: ILoginReducerState = {
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


export const loginReducer = (state: ILoginReducerState, action: ILoginAction): ILoginReducerState => {
    switch (action.type) {
        case loginReducerAction.LOGIN:
            return {
                ...state,
                isLogged: true,
                userData: {
                    id: action.id,
                    email: action.email
                }
            }

        case loginReducerAction.REFRESH:
            return {
                ...state,
                isLogged: true,
                userData: {
                    id: action.id,
                    email: action.email
                }
            }

        case loginReducerAction.LOGOUT:
            return {
                isLogged: false,
                userData: {
                    id: action.id,
                    email: action.email
                }
            }

        default:
            return state;
    }
}