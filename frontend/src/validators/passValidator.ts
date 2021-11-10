const passwordRegexp = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
const emailRegexp = new RegExp('^\\S+@\\S+\.\\S+$');

export const passwordValidate = (data: string) => passwordRegexp.test(data);
export const emailValidate = (data: string) => emailRegexp.test(data);
export const samePasswordValidate = (firstPassword: string, secondPassword: string) => firstPassword === secondPassword
export const isEmpty = (data: string) => data === ''

export const passValidator = {
    password: (data: string) => passwordRegexp.test(data),
    email: (data: string) => emailRegexp.test(data),
    samePassword: (firstPassword: string, secondPassword: string) => firstPassword === secondPassword,
    isEmpty: (data: string) => data === ''
};