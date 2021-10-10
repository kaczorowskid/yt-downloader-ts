import React, { useEffect, useState } from 'react'
import { AppContext } from './AppContext';

interface Props {
    children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({children}) => {

    const [leftColumnVisible, setLeftColumnVisible] = useState<boolean>(false);
    const [scrollValue, setScrollValue] = useState<number>(0);
    
    const checkScroll = () => setScrollValue(window.scrollY);
    
    useEffect(() => {
      window.addEventListener('scroll', checkScroll);
      return () => window.removeEventListener('scroll', checkScroll);
    })

    const value = {
        leftColumnVisible,
        setLeftColumnVisible,
        scrollValue,
        setScrollValue
    }

    return (
        <AppContext.Provider value = {value} >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider