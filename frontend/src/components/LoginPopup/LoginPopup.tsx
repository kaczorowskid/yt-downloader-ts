import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { config } from '../../config';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { loginReducerAction } from '../../reducers/loginReducer';
import * as styled from './LoginPopup.styled';
import { useLoginPopup } from '../../hooks/useLoginPopup'
import { callApi } from '../../helper/callApi';

interface Props {
    changeTheme: boolean
}

const LoginPopup: React.FC<Props> = ({ changeTheme }) => {

    const { loginPath } = config.url.user;

    const { dispatch } = useCurrentUser();
    const { setLoginPopupVisible } = useLoginPopup()
    const history = useHistory();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLoginButton = async () => {
        try {
            const response = await callApi(loginPath, 'POST', { email, password })
            if (response) {
                dispatch({ type: loginReducerAction.LOGIN, id: response.data.id, email: response.data.email })
                setLoginPopupVisible(false)
                history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <styled.Container changeTheme={changeTheme}>
                <styled.InputContainer>
                    <styled.Input placeholder='email' onChange={e => setEmail(e.target.value)} />
                    <styled.Input placeholder='password' onChange={e => setPassword(e.target.value)} />
                </styled.InputContainer>
                <styled.ButtonLoginContainer>
                    <styled.LoginButton onClick={handleLoginButton} >Login</styled.LoginButton>
                    <styled.RegisterLink>Forgot password?</styled.RegisterLink>
                </styled.ButtonLoginContainer>
            </styled.Container>
        </>
    )
}

export default LoginPopup;