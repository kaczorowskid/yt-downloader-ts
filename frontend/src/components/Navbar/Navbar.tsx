import React, { useEffect, useState } from 'react';
import * as styled from './Navbar.styled';
import { useHistory } from "react-router-dom";
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { config } from '../../config';
import { loginReducerAction } from '../../reducers/loginReducer';
import LoginPopup from '../LoginPopup/LoginPopup';
import { useLoginPopup } from '../../hooks/useLoginPopup';
import { Link, animateScroll as scroll } from 'react-scroll'
import { callApi } from '../../helper/callApi';

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

    const handleLogout = async () => {
        try {
            const response = await callApi(logoutPath, 'GET', {});
            if (response) {
                dispatch({ type: loginReducerAction.LOGOUT, id: 0, email: '' })
                history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
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