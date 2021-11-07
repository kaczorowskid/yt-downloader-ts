import React, { useState } from 'react';
import * as styled from './Login.styled';
import { config } from '../../config';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useHistory } from 'react-router-dom';
import { loginReducerAction } from '../../reducers/loginReducer';
import { callApi } from '../../helper/callApi';

const Login: React.FC = () => {

    const { loginPath, generateResetLink } = config.url.user;
    const { register } = config.routerPath;

    const { dispatch } = useCurrentUser();
    const history = useHistory();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false);
    const [resetPasswordEmail, setResetPasswordEmail] = useState<string>('');
    const [resetPasswordVisible, setResetPasswordVisible] = useState<boolean>(false);
    const [resetInfo, setResetInfo] = useState<boolean>(false);

    const handleLoginButton = async () => {
        try {
            const response = await callApi(loginPath, 'POST', { email, password })
            if (response) {
                dispatch({ type: loginReducerAction.LOGIN, id: response.data.id, email: response.data.email, active: response.data.active })
                history.push('/')
            }
        } catch (e) {
            setError(true)
        }
    }

    const handleResetPassword = async () => {
        try {
            const response = await callApi(generateResetLink, 'GET', { email: resetPasswordEmail })
            response && setResetInfo(true);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <styled.Container>
            <styled.Column>
                <styled.LeftSideContainer>
                    <styled.Title>Youtube Music <span style={{ color: 'orange' }} >Downloader</span></styled.Title>
                    <styled.Description>Download your favorite music from YouTube, and store in library!</styled.Description>
                    <styled.RegisterLinkContainer >
                        <styled.RegisterLink onClick={() => history.push(register)}> You have no account? Create! </styled.RegisterLink>
                    </styled.RegisterLinkContainer>
                </styled.LeftSideContainer>
            </styled.Column>
            <styled.Column>
                <styled.LoginWindowContainer>
                    <styled.InputContainer>
                        <styled.InputLabel>Email</styled.InputLabel>
                        <styled.Input onChange={e => setEmail(e.target.value)} />
                    </styled.InputContainer>
                    <styled.InputContainer>
                        <styled.InputLabel>Password</styled.InputLabel>
                        <styled.Input onChange={e => setPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.Button onClick={handleLoginButton} >Log in</styled.Button>
                    {error && <styled.Error>Wrong login or password</styled.Error>}
                    <styled.ForgotPasswordContainer>
                        {resetInfo && <styled.ResetPasswordInfo>A password reset link was sent. Click the link in the email to create a new password.</styled.ResetPasswordInfo>}
                        {!resetPasswordVisible ? <styled.ForgotPasswordLink onClick = {() => setResetPasswordVisible(true)} >Forgot password?</styled.ForgotPasswordLink> :
                        <styled.ResetPasswordInputContainer>
                            <styled.ResetPasswordInput onChange = {e => setResetPasswordEmail(e.target.value)} />
                            <styled.ResetButtonsContainer>
                                <styled.ResetPassword onClick = {handleResetPassword} >Reset Password</styled.ResetPassword>
                                <styled.ResetPassword onClick = {() => setResetPasswordVisible(false)} >Cancel</styled.ResetPassword>
                            </styled.ResetButtonsContainer>
                        </styled.ResetPasswordInputContainer>}
                    </styled.ForgotPasswordContainer>
                </styled.LoginWindowContainer>
            </styled.Column>
        </styled.Container>
    )
}

export default Login;