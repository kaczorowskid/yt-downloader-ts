import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { config } from '../../config';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { loginReducerAction } from '../../reducers/loginReducer';
import * as styled from './LoginPopup.styled';
import { useLoginPopup } from '../../hooks/useLoginPopup' 

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

    const handleLoginButton = () => {
        axios.post(loginPath, {
            email: email,
            password: password
        })
            .then((res: any) => dispatch({ type: loginReducerAction.LOGIN, id: res.data.id, email: res.data.email }))
            .then(() => setLoginPopupVisible(false))
            .catch(e => console.log(e.response.data.err))
            .finally(() => history.push('/'))
    }


    return (
        <>
            <styled.Container changeTheme = {changeTheme}>
                <styled.InputContainer>
                    <styled.Input placeholder = 'email' onChange = {e => setEmail(e.target.value)} />
                    <styled.Input placeholder = 'password' onChange = {e => setPassword(e.target.value)} />
                </styled.InputContainer>
                <styled.ButtonLoginContainer>
                    <styled.LoginButton onClick = {handleLoginButton} >Login</styled.LoginButton>
                    <styled.RegisterLink>Forgot password?</styled.RegisterLink>
                </styled.ButtonLoginContainer>
            </styled.Container>
        </>
    )
}

export default LoginPopup;