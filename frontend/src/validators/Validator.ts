const passwordRegexp = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
const emailRegexp = new RegExp('^\\S+@\\S+\.\\S+$');
const youtubeRegexp = new RegExp('((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?');

export const Validator = {
    youtube: (data: string) => youtubeRegexp.test(data),
    password: (data: string) => passwordRegexp.test(data),
    email: (data: string) => emailRegexp.test(data),
    samePassword: (firstPassword: string, secondPassword: string) => firstPassword === secondPassword,
};