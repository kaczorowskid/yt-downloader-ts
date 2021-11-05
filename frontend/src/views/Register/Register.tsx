import React, { useState } from 'react';
import * as styled from './Register.styled';
import { config } from '../../config';
import { callApi } from '../../helper/callApi';
import { useHistory } from 'react-router';

const Register: React.FC = () => {
    const { registerPath } = config.url.user;
    const { login } = config.routerPath;

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const [error, setError] = useState<boolean>(false);

    const history = useHistory();

    const registerUser = async () => {

        if (!(password === confirmPassword) || password === '' || confirmPassword === '' || email === '') {
            setError(true)
        } else {
            try {
                const response = await callApi(registerPath, 'POST', { email, password })
                if (response) {
                    history.push('/')
                }
            } catch (e) {
                setError(true)
            }
        }
    }

    return (
        <styled.Container>
            <styled.Column>
                <styled.LeftSideContainer>
                    <styled.Title>Youtube Music <span style={{ color: 'orange' }} >Downloader</span></styled.Title>
                    <styled.Description>Download your favorite music from YouTube, and store in library!</styled.Description>
                    <styled.LoginLinkContainer >
                        <styled.LoginLink onClick={() => history.push(login)} >Log in</styled.LoginLink>
                    </styled.LoginLinkContainer>
                </styled.LeftSideContainer>
            </styled.Column>
            <styled.Column>
                <styled.RegisterWindowContainer>
                    <styled.InputContainer>
                        <styled.InputLabel>Email</styled.InputLabel>
                        <styled.Input onChange={e => setEmail(e.target.value)} />
                    </styled.InputContainer>
                    <styled.InputContainer>
                        <styled.InputLabel>Password</styled.InputLabel>
                        <styled.Input onChange={e => setPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.InputContainer>
                        <styled.InputLabel>Confirm password</styled.InputLabel>
                        <styled.Input onChange={e => setConfirmPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.Button onClick={registerUser} >Create account</styled.Button>
                    {error && <styled.Error>Enter the data correctly</styled.Error>}
                </styled.RegisterWindowContainer>
            </styled.Column>
        </styled.Container>
    )
}

export default Register;