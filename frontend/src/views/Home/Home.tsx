import React from 'react';
import InputLink from '../../components/InputLink/InputLink';
import LeftColumnFilesLibrary from '../../components/LeftColumnFilesLibrary/LeftColumnFilesLibrary';
import Library from '../../components/Library/Library';
import Navbar from '../../components/Navbar/Navbar';
import { useScrollValue } from '../../hooks/useScrollValue';
import { useCurrentUser } from '../../hooks/useCurrentUser';


const Home: React.FC = () => {

    const { state } = useCurrentUser();
    const { scrollValue } = useScrollValue();

    return (
        <>
            <LeftColumnFilesLibrary />
            <Navbar scrollValue={scrollValue} />
            <InputLink id='inputLink' />
            {state.isLogged && <Library id = 'library' />}
        </>
    )
}

export default Home;