import React from 'react';
import Footer from '../../components/Footer/Footer';
import InputLink from '../../components/InputLink/InputLink';
import LeftColumnFilesLibrary from '../../components/LeftColumnFilesLibrary/LeftColumnFilesLibrary';
import Library from '../../components/Library/Library';
import Navbar from '../../components/Navbar/Navbar';
import { useScrollValue } from '../../hooks/useScrollValue';
import FolderInfo from '../FolderInfo/FolderInfo';

const Home: React.FC = () => {

    const { scrollValue } = useScrollValue();

    return (
        <>
            <LeftColumnFilesLibrary />
            <Navbar scrollValue={scrollValue} />
            <InputLink id='inputLink' />
            <Library id='library' />
            <FolderInfo />
            <Footer />
        </>
    )
}

export default Home;