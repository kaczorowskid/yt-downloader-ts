import React, { useState } from 'react';
import * as styled from './Login.styled';
import { config } from '../../config';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useHistory } from 'react-router-dom';
import { loginReducerAction } from '../../reducers/loginReducer';
import { callApi, IErrorFetch } from '../../helper/callApi';
import { Validator } from '../../validators/Validator';

const Login: React.FC = () => {

    const { loginPath, generateResetLink } = config.url.user;
    const { register } = config.routerPath;

    const { dispatch } = useCurrentUser();
    const history = useHistory();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<IErrorFetch>();
    const [resetPasswordEmail, setResetPasswordEmail] = useState<string>('');
    const [resetPasswordVisible, setResetPasswordVisible] = useState<boolean>(false);
    const [resetInfo, setResetInfo] = useState<boolean>(false);
    const [errorResetPassword, setErrorResetPassword] = useState<IErrorFetch>();

    const handleLoginButton = async () => {
        const { response, err } = await callApi(loginPath, 'POST', { email, password }, 'body')
        if (response) {
            dispatch({ type: loginReducerAction.LOGIN, id: response.data.id, email: response.data.email, active: response.data.active })
            history.push('/')
        }
        if (err) {
            setError(err.response.data)
        }
    }

    const handleResetPassword = async () => {
        if (!(Validator.email(resetPasswordEmail))) {
            setErrorResetPassword({
                err: true,
                errData: 'Invalid data'
            })
        } else {
            const { response, err } = await callApi(generateResetLink, 'POST', { email: resetPasswordEmail }, 'body')
            if (response) {
                setResetInfo(true);
            }
            if (err) {
                setErrorResetPassword(err.response.data)
            }
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
                        <styled.Input type = 'password' onChange={e => setPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.Button onClick={handleLoginButton} >Log in</styled.Button>
                    {(error && error.err) && <styled.Error>{error.errData}</styled.Error>}
                    <styled.ForgotPasswordContainer>
                        {resetInfo && <styled.ResetPasswordInfo>A password reset link was sent. Click the link in the email to create a new password.</styled.ResetPasswordInfo>}
                        {!resetPasswordVisible ? <styled.ForgotPasswordLink onClick={() => setResetPasswordVisible(true)} >Forgot password?</styled.ForgotPasswordLink> :
                            <styled.ResetPasswordInputContainer>
                                <styled.ResetPasswordInput onChange={e => setResetPasswordEmail(e.target.value)} />
                                <styled.ResetButtonsContainer>
                                    <styled.ResetPassword onClick={handleResetPassword} >Reset Password</styled.ResetPassword>
                                    <styled.ResetPassword onClick={() => setResetPasswordVisible(false)} >Cancel</styled.ResetPassword>
                                </styled.ResetButtonsContainer>
                                {(errorResetPassword && errorResetPassword.err) && <styled.Error>{errorResetPassword.errData}</styled.Error>}
                            </styled.ResetPasswordInputContainer>}
                    </styled.ForgotPasswordContainer>
                </styled.LoginWindowContainer>
            </styled.Column>
        </styled.Container>
    )
}

export default Login;