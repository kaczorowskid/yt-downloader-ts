import React, { useState } from 'react'
import { AppContext } from './AppContext';

interface Props {
    children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({children}) => {

    const [leftColumnVisible, setLeftColumnVisible] = useState<boolean>(false);

    const value = {
        leftColumnVisible,
        setLeftColumnVisible
    }

    return (
        <AppContext.Provider value = {value} >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider