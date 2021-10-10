import React, { useEffect, useState } from 'react';
import GlobalStyle from './GlobalSStyle';
import Navbar from './components/Navbar/Navbar';
import InputLink from './components/InputLink/InputLink';

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
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </>
  );
}

export default App;
