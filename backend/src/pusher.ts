import Pusher from 'pusher'

// const pusher = new Pusher({
//     appId: process.env.APP_ID as string,
//     key: process.env.APP_KEY as string,
//     secret: process.env.SECRET as string,
//     cluster: process.env.CLUSTER as string
// });


const pusher = new Pusher({
    appId: "1285431",
    key: "37acf44a869a3661273e",
    secret: "f164d9e1a11e8339e102",
    cluster: "eu"
});

export default pusher;