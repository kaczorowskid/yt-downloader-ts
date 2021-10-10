import React from 'react';
import * as styled from './InputLink.styled';


const InputLink: React.FC = () => {
    return (
        <>
        <styled.Container>
            <styled.InputWrapper>
                <styled.Input />
                <styled.SearchIconContainer>
                    <styled.SearchIcon />
                </styled.SearchIconContainer>
            </styled.InputWrapper>
        </styled.Container>
        </>
    )
}

export default InputLink;