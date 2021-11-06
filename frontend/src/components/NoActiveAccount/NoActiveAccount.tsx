import React from 'react';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import * as styled from './NoActiveAccount.styled';

const NoActiveAccount: React.FC = () => {

    const { state } = useCurrentUser()

    return (
        <styled.Container>
            <styled.Warning>Your account is not <span style = {{color: 'orange'}}>activated</span>!</styled.Warning>
            <styled.Message>Activation link has been sent to the address <span style = {{color: 'orange'}}> {state.userData.email}</span></styled.Message>
        </styled.Container>
    )
}

export default NoActiveAccount;