import React from 'react';
import Footer from '../../components/Footer/Footer';
import InputLink from '../../components/InputLink/InputLink';
import LeftColumnFilesLibrary from '../../components/LeftColumnFilesLibrary/LeftColumnFilesLibrary';
import Library from '../../components/Library/Library';
import Library1 from '../../components/Library1/Library1';
import Navbar from '../../components/Navbar/Navbar';
import { useScrollValue } from '../../hooks/useScrollValue';
import FolderInfo from '../../components/FolderInfo/FolderInfo';
import { useCurrentUser } from '../../hooks/useCurrentUser';

const Home: React.FC = () => {

    const { state } = useCurrentUser();
    const { scrollValue } = useScrollValue();

    return (
        <>
            <LeftColumnFilesLibrary />
            <Navbar scrollValue={scrollValue} />
            <InputLink id='inputLink' />
            {state.isLogged && <Library1 />}
        </>
    )
}

export default Home;