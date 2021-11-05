import Pusher from 'pusher'

const pusher = new Pusher({
    appId: process.env.APP_ID!,
    key: process.env.APP_KEY!,
    secret: process.env.SECRET!,
    cluster: process.env.CLUSTER!,
});

export default pusher;