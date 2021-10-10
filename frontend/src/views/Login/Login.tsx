import React, { useState } from 'react';
import * as styled from './Login.styled';
import axios from 'axios';
import { config } from '../../config';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {

    const { loginPath } = config.url.user;

    const { dispatch } = useCurrentUser();
    const history = useHistory();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLoginButton = () => {
        axios.post(loginPath, {
            email: email,
            password: password
        })
            .then((res: any) => dispatch({ type: 'LOGIN', id: res.data.id, email: res.data.email }))
            .catch(e => console.log(e.response.data.err))
            .finally(() => history.push('/'))
    }

    return (
        <>
            <styled.Container>
                <styled.LoginContainer>
                    <styled.InputContainer>
                        <styled.Input placeholder='e-mail' onChange={e => setEmail(e.target.value)} />
                        <styled.Input placeholder='password' onChange={e => setPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.ButtonContainer>
                        <styled.Button onClick = {handleLoginButton} >Zaloguj</styled.Button>
                    </styled.ButtonContainer>
                </styled.LoginContainer>
            </styled.Container>
        </>
    )
}

export default Login;