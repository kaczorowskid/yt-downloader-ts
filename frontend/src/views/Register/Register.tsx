import axios from 'axios';
import React, { useState } from 'react';
import * as styled from './Register.styled';
import { config } from '../../config';

const Register: React.FC = () => {

    const { registerPath } = config.url.user;

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const registerUser  = () => {
        if(!(password === confirmPassword) || password === '' || confirmPassword === '' || email === '') {
            console.log('error')
        }
        else {
            axios.post(registerPath, {
                email: email,
                password: password
            }).then((e: any) => console.log(e.data.msg))
            .catch(() => console.log('error'))
        }
    }

    return (
        <>
            <styled.Container>
                <styled.RegisterContainer>
                    <styled.InputContainer>
                        <styled.Input placeholder='e-mail' onChange={e => setEmail(e.target.value)} />
                        <styled.Input placeholder='password' onChange={e => setPassword(e.target.value)} />
                        <styled.Input placeholder='confirm password' onChange={e => setConfirmPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.ButtonContainer>
                        <styled.Button onClick = {registerUser} >Create account</styled.Button>
                    </styled.ButtonContainer>
                </styled.RegisterContainer>
            </styled.Container>
        </>
    )
}

export default Register;