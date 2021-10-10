import React from 'react';
import * as styled from './Library.styled';
import Folder from '../Folder/Folder';

const Library: React.FC = () => {

    const isLogged = true;

    return (
        <>
            {isLogged ?
                <styled.Container>
                    <styled.FoldersContainer>
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
                        <Folder />
       
  
                    </styled.FoldersContainer>
                </styled.Container> :
                <styled.NoLoggedUserContainer>
                    <styled.NoUserLoggedWarning>Library is not not available. You must be logged!</styled.NoUserLoggedWarning>
                </styled.NoLoggedUserContainer>
            }
        </>
    )
}

export default Library;