export const errorLogger = (err: any) => {
    console.warn('Error code: ', err.response.data.errStatus, ' Error data: ', err.response.data.errData);
}