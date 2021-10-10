import React, { useEffect, useState } from 'react';
import GlobalStyle from './GlobalSStyle';
import Navbar from './components/Navbar/Navbar';
import InputLink from './components/InputLink/InputLink';
import Library from './components/Library/Library';

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
      <Navbar scrollValue = {scrollValue} />
      <InputLink />
      <Library />
    </>
  );
}

export default App;
