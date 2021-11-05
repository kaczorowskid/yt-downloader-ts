export interface ILoginReducerState {
    isLoading: boolean
    isLogged: boolean
    userData: {
        id: number
        email: string
    }
}