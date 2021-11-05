import axios, { AxiosResponse, Method } from 'axios';

export const callApi = async (url: string, method: Method, data: any) => {

    const response: AxiosResponse<any> = await axios({
        url: url,
        method: method,
        params: data
    })

    return response
}