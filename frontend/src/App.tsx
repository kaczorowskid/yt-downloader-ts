import React, { useEffect, useState } from 'react';
import GlobalStyle from './GlobalSStyle';
import Navbar from './components/Navbar/Navbar';
import InputLink from './components/InputLink/InputLink';
import Library from './components/Library/Library';
import Footer from './components/Footer/Footer';
import LeftColumnFilesLibrary from './components/LeftColumnFilesLibrary/LeftColumnFilesLibrary';

const App: React.FC = () => {

  const [scrollValue, setScrollValue] = useState<number>(0);
  const checkScroll = () => setScrollValue(window.scrollY);
  
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  })

  return (
    < >
      <GlobalStyle />
      <LeftColumnFilesLibrary />
      <Navbar scrollValue = {scrollValue} />
      <InputLink />
      <Library />
      <Footer />
    </>
  );
}

export default App;
