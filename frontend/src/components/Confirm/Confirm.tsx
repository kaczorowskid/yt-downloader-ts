import React, { useEffect, useState } from 'react';
import * as styled from './Confirm.styled';
import { useHistory, useParams } from 'react-router';
import { callApi } from '../../helper/callApi';
import { config } from '../../config';

const Confirm: React.FC = () => {

    const { home } = config.routerPath;
    const { confirm } = config.url.user;

    const { token }: any = useParams();
    const history = useHistory();

    const [isActivated, setIsActivated] = useState<boolean>(false);

    useEffect(() => {
        const fetchActivation = async () => {
            try {
                const response = await callApi(confirm, 'GET', { token: token })
                response.data.confirm ? setIsActivated(true) : setIsActivated(false)
            } catch (e) {
                console.log(e);
            }
        }

        fetchActivation();
    }, [])

    useEffect(() => {
        if (isActivated) {
            const timeout = setTimeout(() => {
                history.push(home);
            }, 5000)


            return () => clearTimeout(timeout)
        }
    }, [isActivated])

    return (
        <>
            <styled.Container>
                <styled.InfoContainer>
                    {isActivated ? 
                    <styled.Info fontSize={25}>Your account is activation</styled.Info> : 
                    <styled.Info fontSize={25}>Your account is not activation</styled.Info>}
                    {isActivated ? 
                    <styled.Info fontSize={15} >Page redirect in homepage after 5 seconds</styled.Info> : 
                    <styled.Info fontSize={15} >Check activation link, probably is broken</styled.Info>}
                </styled.InfoContainer>
            </styled.Container>
        </>
    )
}

export default Confirm;