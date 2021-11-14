export interface ILoginReducerState {
    isLogged: boolean
    userData: {
        id: number
        email: string,
        active: boolean
    }
}