import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import InputLink from '../../components/InputLink/InputLink';
import LeftColumnFilesLibrary from '../../components/LeftColumnFilesLibrary/LeftColumnFilesLibrary';
import Library from '../../components/Library/Library';
import Navbar from '../../components/Navbar/Navbar';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useScrollValue } from '../../hooks/useScrollValue';
import { config } from '../../config';

const Home: React.FC = () => {

    const { getAllFoldersPath } = config.url.folder;

    const [folders, setFolders] = useState<Array<any>>([]);

    const { scrollValue } = useScrollValue(); 
    const { state } = useCurrentUser();

    // useEffect(() => {
    //     if (state.isLogged) {
    //         axios.get(getAllFoldersPath, {
    //             params: {
    //                 id: state.userData.id
    //             }
    //         })
    //             .then((res: any) => setFolders(res.data.data))
    //     }
    // }, [state])

    return (
        <>
            <LeftColumnFilesLibrary folders = {[null]} />
            <Navbar scrollValue={scrollValue} />
            <InputLink />
            <Library />
            <Footer />
        </>
    )
}

export default Home;