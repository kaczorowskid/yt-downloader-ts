import React from 'react';
import Footer from '../../components/Footer/Footer';
import InputLink from '../../components/InputLink/InputLink';
import LeftColumnFilesLibrary from '../../components/LeftColumnFilesLibrary/LeftColumnFilesLibrary';
import Library from '../../components/Library/Library';
import Navbar from '../../components/Navbar/Navbar';
import { useScrollValue } from '../../hooks/useScrollValue';

const Home: React.FC = () => {

    const { scrollValue } = useScrollValue(); 

    return (
        <>
            <LeftColumnFilesLibrary />
            <Navbar scrollValue={scrollValue} />
            <InputLink />
            <Library />
            <Footer />
        </>
    )
}

export default Home;