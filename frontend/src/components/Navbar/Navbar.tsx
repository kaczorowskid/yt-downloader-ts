import React, { useEffect, useState } from 'react';
import * as styled from './Navbar.styled';
import { useHistory } from "react-router-dom";
import { useCurrentUser } from '../../hooks/useCurrentUser';
import axios from 'axios';
import { config } from '../../config';

interface Props {
    scrollValue: number
}

const Navbar: React.FC<Props> = ({ scrollValue }) => {

    const { logoutPath } = config.url.user;

    const [isTop, setIsTop] = useState<boolean>(true)
    const [inputVisible, setInputVisible] = useState<boolean>(false)

    const history = useHistory();
    const { state, dispatch } = useCurrentUser();

    const handleLogout = () => {
        axios.get(logoutPath)
        .then(() => dispatch({type: 'LOGOUT'}))
        .finally(() => history.push('/'))
    }

    useEffect(() => {
        setIsTop(() => scrollValue > 100 ? false : true)
        setInputVisible(() => scrollValue > 400 ? false : true)
    }, [scrollValue])

    return (
        <>
            <styled.Container isTop={isTop} >
                <styled.ItemNavbarContainer isTop={isTop} >
                    <styled.ItemNavbar>Home</styled.ItemNavbar>
                    <styled.ItemNavbar>Library</styled.ItemNavbar>
                </styled.ItemNavbarContainer>
                <styled.InputContainer isVisible={inputVisible} isTop={isTop} >
                    <styled.InputWrapper>
                        <styled.Input />
                        <styled.SearchgIconContainer>
                            <styled.SearchIcon />
                        </styled.SearchgIconContainer>
                    </styled.InputWrapper>
                </styled.InputContainer>
                <styled.AccountContainer isTop={isTop} >
                    {state.isLogged ?
                        <styled.Log isTop={isTop} onClick={handleLogout} >Logout</styled.Log> :
                        <>
                            <styled.Log isTop={!isTop} onClick={() => history.push('/login')} >Login</styled.Log>
                            <styled.Log isTop={isTop} onClick={() => history.push('/register')} >Create</styled.Log>
                        </>
                    }
                </styled.AccountContainer>
            </styled.Container>
        </>
    )
}

export default Navbar;