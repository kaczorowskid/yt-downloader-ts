import axios, { AxiosResponse, Method } from 'axios';

export interface IErrorFetch {
    err: boolean,
    succesStatus?: number,
    succesData?: string,
    errStatus?: number,
    errData?: string
}

export const callApi = async (url: string, method: Method, data: any) => {
    let response: any, err: any;

    response = await axios({
        url: url,
        method: method,
        params: data
    })
    .catch(e => {
        err = e;
    })

    return { response, err }
}