export interface IDataService {
    err: boolean,
    successStatus?: number,
    successData?: any,
    errStatus?: number,
    errData?: string
}

export interface IDataError {
    err: boolean,
    errStatus: number,
    errData: string
}

export interface IDataSuccess {
    err: boolean,
    successStatus: number
    successData: any 
}