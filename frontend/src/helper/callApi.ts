import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const callApi = async (url: string, method: any, {...data}: any) => {
    console.log(data);
    
        const response: AxiosResponse<any> = await axios({
            url: url,
            method: method,
            ...method == 'POST' ? {data: data} : {params: data}
        })

        return response
}


export const callApi1 = async (url: string, method: any, {...data}: any) => {
    console.log(data);
    
    const response: any = await axios({
        url: url,
        method: method,
        ...method == 'POST' ? {data: data} : {params: data}
    })

}