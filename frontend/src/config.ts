const node_env = process.env.NODE_ENV === 'development' ? 'http://localhost:4200' : 'https://moja-domena.com';

export const config = {
    routerPath: {
        login: '/login',
        register: '/register',
        home: '/'
    },
    url: {
        user: {
            registerPath: `${node_env}/user/register`,
            loginPath: `${node_env}/user/login`,
            logoutPath: `${node_env}/user/logout`,
            meRefresh: `${node_env}/user/me`
        }
    }
}