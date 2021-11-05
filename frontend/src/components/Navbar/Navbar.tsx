import React, { useEffect, useState } from 'react';
import * as styled from './Navbar.styled';
import { useHistory } from "react-router-dom";
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { config } from '../../config';
import { loginReducerAction } from '../../reducers/loginReducer';
import { Link, animateScroll as scroll } from 'react-scroll'
import { callApi } from '../../helper/callApi';
import { useLeftColumn } from '../../hooks/useLeftColumn';
import { useYouTubeData } from '../../hooks/useYouTubeData';
import Loading from '../Loading/Loading';

interface Props {
    scrollValue: number
}

const Navbar: React.FC<Props> = ({ scrollValue }) => {

    const { getInfo } = config.url.download
    const { logoutPath } = config.url.user;
    const { login, register } = config.routerPath;

    const [isTop, setIsTop] = useState<boolean>(true)
    const [inputVisible, setInputVisible] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const history = useHistory();
    const { state, dispatch } = useCurrentUser();
    const { setLeftColumnVisible } = useLeftColumn();
    const { fetchYouTubeData, setFetchYouTubeData } = useYouTubeData();

    const handleLogout = async () => {
        try {
            const response = await callApi(logoutPath, 'GET', {});
            if (response) {
                history.go(0);
                dispatch({ type: loginReducerAction.LOGOUT, id: 0, email: '' })
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setIsTop(() => scrollValue > 100 ? false : true)
        setInputVisible(() => scrollValue > 400 ? false : true)
    }, [scrollValue])

    const endFetch = () => {
        setInputValue('')
        setLoading(false)
        setLeftColumnVisible(true)
    }

    const getYouTubeData = async () => {
        setLoading(true)
        try {
            const response = await callApi(getInfo, 'GET', { url: inputValue })
            if(response) {
                setFetchYouTubeData([...fetchYouTubeData, response.data])
                endFetch()
            }
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <>
        {loading && <Loading />}
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
                        <styled.Input onChange = {e => setInputValue(e.target.value)} value = {inputValue} />
                        <styled.SearchgIconContainer onClick = {getYouTubeData} >
                            <styled.SearchIcon />
                        </styled.SearchgIconContainer>
                    </styled.InputWrapper>
                </styled.InputContainer>
                <styled.AccountContainer isTop={isTop} >
                    {state.isLogged ?
                        <styled.Log isTop={isTop} onClick={handleLogout} >Logout</styled.Log> :
                        <>
                            <styled.Log isTop={!isTop} onClick={() => history.push(login)} >Login</styled.Log>
                            <styled.Log isTop={isTop} onClick={() => history.push(register)} >Create</styled.Log>
                        </>
                    }
                </styled.AccountContainer>
            </styled.Container>
        </>
    )
}

export default Navbar;