import React, { useEffect, useState } from 'react'
import { AppContext } from './AppContext';
import { IYoutubeData } from '../../types/IYoutubeData'

interface Props {
    children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({children}) => {

    const [leftColumnVisible, setLeftColumnVisible] = useState<boolean>(false);
    const [scrollValue, setScrollValue] = useState<number>(0);
    const [fetchYouTubeData, setFetchYouTubeData] = useState<Array<IYoutubeData>>([])
    
    const checkScroll = () => setScrollValue(window.scrollY);
    
    useEffect(() => {
      window.addEventListener('scroll', checkScroll);
      return () => window.removeEventListener('scroll', checkScroll);
    })

    const value = {
        leftColumnVisible,
        setLeftColumnVisible,
        scrollValue,
        setScrollValue,
        fetchYouTubeData,
        setFetchYouTubeData
    }

    return (
        <AppContext.Provider value = {value} >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider