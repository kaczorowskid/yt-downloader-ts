import React, { useEffect } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js'

const Test: React.FC = () => {

    const handleRequest = () => {
        axios.post('http://localhost:4200/progress')
            .then(res => console.log(res))
    }

    useEffect(() => {
        // const pusher = new Pusher(process.env.REACT_APP_KEY as string, {
        //     cluster: process.env.REACT_APP_CLUSTER
        // });

        // const channel = pusher.subscribe('download');

        // channel.bind('progress', (data: any) => {
        //     console.log(data)
        // });
    }, [])

    return (
        <>
            <button onClick={handleRequest} >click</button>
        </>
    )
}

export default Test;