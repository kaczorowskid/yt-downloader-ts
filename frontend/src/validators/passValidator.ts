const passwordRegexp = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
const emailRegexp = new RegExp('^\\S+@\\S+\.\\S+$');

export const passValidator = {
    password: (data: string) => passwordRegexp.test(data),
    email: (data: string) => emailRegexp.test(data),
    samePassword: (firstPassword: string, secondPassword: string) => firstPassword === secondPassword,
};