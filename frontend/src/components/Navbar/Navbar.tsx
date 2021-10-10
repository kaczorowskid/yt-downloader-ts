import React, { useEffect, useState } from 'react';
import * as styled from './Navbar.styled';

interface Props {
    scrollValue: number
}

const Navbar: React.FC<Props> = ({ scrollValue }) => {

    const [isTop, setIsTop] = useState<boolean>(true)
    const [inputVisible, setInputVisible] = useState<boolean>(false)

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
                <styled.InputContainer isVisible = {inputVisible} isTop={isTop} >
                    <styled.InputWrapper>
                        <styled.Input />
                        <styled.SearchgIconContainer>
                            <styled.SearchIcon />
                        </styled.SearchgIconContainer>
                    </styled.InputWrapper>
                </styled.InputContainer>
                <styled.AccountContainer isTop={isTop} >
                    <styled.Log isTop={!isTop} >Login</styled.Log>
                    <styled.Log isTop={isTop} >Create</styled.Log>
                </styled.AccountContainer>
                {/* <styled.MusicIcon isTop = {isTop} /> */}
            </styled.Container>
        </>
    )
}

export default Navbar;