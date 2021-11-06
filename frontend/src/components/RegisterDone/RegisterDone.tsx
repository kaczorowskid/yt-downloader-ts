import React from 'react';
import * as styled from './RegisterDone.styled';
import { config } from '../../config';
import { useHistory } from 'react-router';

const RegisterDone: React.FC = () => {

    const { login } = config.routerPath;

    const history = useHistory();

    return (
        <>
        <styled.Container>
            <styled.InfoContainer>
                <styled.Info>Your account is <span style = {{color: 'orange'}}> activated.</span> </styled.Info>
                <styled.Info>You can <span onClick = {() => history.push(login)} style = {{color: 'orange', textDecoration: 'underline', cursor: 'pointer'}} > login</span>.</styled.Info>
            </styled.InfoContainer>
        </styled.Container>
        </>
    )
}

export default RegisterDone;