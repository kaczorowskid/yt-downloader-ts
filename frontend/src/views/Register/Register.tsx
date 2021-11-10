import React, { useState } from 'react';
import * as styled from './Register.styled';
import { config } from '../../config';
import { callApi, IErrorFetch } from '../../helper/callApi';
import { useHistory } from 'react-router';
import { passValidator } from '../../validators/passValidator';

const Register: React.FC = () => {
    const { registerPath } = config.url.user;
    const { login } = config.routerPath;

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const [error, setError] = useState<IErrorFetch>();
    const [isCreated, setIsCreated] = useState<boolean>(false);

    const history = useHistory();

    const registerUser = async () => {
        if (!(passValidator.samePassword(password, confirmPassword) &&
            passValidator.password(confirmPassword) &&
            passValidator.password(password) &&
            passValidator.email(email))
        ) {
            setError({
                err: true,
                errData: 'Invalid data'
            })
        } else {
            const { response, err } = await callApi(registerPath, 'POST', { email, password })
            if (response) {
                setIsCreated(true)
            }
            if (err) {
                setError(err.response.data)
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
                    <styled.Button onClick={() => registerUser()} >Create account</styled.Button>
                    {error && error.err && <styled.Error>{error.errData}</styled.Error>}
                    {isCreated && <styled.Info>Your account is <span style={{ color: 'orange' }}> created</span>. You must click in activation link. Go to your e-mail.</styled.Info>}
                </styled.RegisterWindowContainer>
            </styled.Column>
        </styled.Container>
    )
}

export default Register;