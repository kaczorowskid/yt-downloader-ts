import React, { useEffect, useState } from 'react';
import * as styled from './Navbar.styled';
import { useHistory } from "react-router-dom";
import { useCurrentUser } from '../../hooks/useCurrentUser';
import axios from 'axios';
import { config } from '../../config';
import { loginReducerAction } from '../../reducers/loginReducer';
import LoginPopup from '../LoginPopup/LoginPopup';
import { useLoginPopup } from '../../hooks/useLoginPopup';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface Props {
    scrollValue: number
}

const Navbar: React.FC<Props> = ({ scrollValue }) => {

    const { logoutPath } = config.url.user;

    const [isTop, setIsTop] = useState<boolean>(true)
    const [inputVisible, setInputVisible] = useState<boolean>(false)

    const history = useHistory();
    const { state, dispatch } = useCurrentUser();
    const { loginPopupVisible, setLoginPopupVisible } = useLoginPopup()

    const handleLogout = () => {
        axios.get(logoutPath)
            .then(() => dispatch({ type: loginReducerAction.LOGOUT, id: 0, email: '' }))
            .finally(() => history.push('/'))
    }

    useEffect(() => {
        setIsTop(() => scrollValue > 100 ? false : true)
        setInputVisible(() => scrollValue > 400 ? false : true)
    }, [scrollValue])

    return (
        <>
            {loginPopupVisible && <LoginPopup changeTheme={isTop} />}
            <styled.Container isTop={isTop} >
                <styled.ItemNavbarContainer isTop={isTop} >
                    <styled.ItemNavbar isTop={isTop}>
                        <Link to="inputLink" spy={true} smooth={true} offset={-150} duration={500} >
                            Home
                        </Link>
                    </styled.ItemNavbar>
                    {state.isLogged && <styled.ItemNavbar isTop={isTop}>
                        <Link to="library" spy={true} smooth={true} offset={-150} duration={500} >
                            Library
                        </Link>
                    </styled.ItemNavbar>}
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
                            <styled.Log isTop={!isTop} onClick={() => setLoginPopupVisible(!loginPopupVisible)} >Login</styled.Log>
                            <styled.Log isTop={isTop} onClick={() => history.push('/register')} >Create</styled.Log>
                        </>
                    }
                </styled.AccountContainer>
            </styled.Container>
        </>
    )
}

export default Navbar;