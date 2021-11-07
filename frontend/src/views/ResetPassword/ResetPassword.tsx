import React, { useState } from 'react';
import { useParams } from 'react-router';
import { config } from '../../config';
import { callApi } from '../../helper/callApi';
import * as styled from './ResetPassword.styled';

const ResetPassword: React.FC = () => {
    const { resetPassword } = config.url.user;

    const { token }: any = useParams();

    const [oldPassword, setOldPassword] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const [error, setError] = useState<boolean>(false);
    const [isReset, setIsReset] = useState<boolean>(false);

    const handleResetPassword = async () => {
        if(password === '' || confirmPassword === '' || password !== confirmPassword) setError(true);
        else {
            try {
                const response = await callApi(resetPassword, 'POST', {oldPassword, password, token})
                if(response) setIsReset(true)
            } catch (e) {
                console.log(e)
            }
        }
    }
    

    return (
        <styled.Container>
            <styled.Column>
                <styled.LeftSideContainer>
                    <styled.Title>Youtube Music <span style={{ color: 'orange' }} >Downloader</span></styled.Title>
                    <styled.Description>Reset your password!</styled.Description>
                </styled.LeftSideContainer>
            </styled.Column>
            <styled.Column>
                <styled.RegisterWindowContainer>
                    <styled.InputContainer>
                        <styled.InputLabel>Old password</styled.InputLabel>
                        <styled.Input onChange={e => setOldPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.InputContainer>
                        <styled.InputLabel>Password</styled.InputLabel>
                        <styled.Input onChange={e => setPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.InputContainer>
                        <styled.InputLabel>Confirm password</styled.InputLabel>
                        <styled.Input onChange={e => setConfirmPassword(e.target.value)} />
                    </styled.InputContainer>
                    <styled.Button onClick = {handleResetPassword} >Reset password</styled.Button>
                    {error && <styled.Error>Enter the data correctly</styled.Error>}
                    {isReset && <styled.Info>Password is reset. You can logged in</styled.Info>}
                </styled.RegisterWindowContainer>
            </styled.Column>
        </styled.Container>
    )
}

export default ResetPassword;