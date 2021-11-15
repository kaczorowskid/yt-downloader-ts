import React, { useState } from 'react';
import * as styled from './InputLink.styled';
import { config } from '../../config';
import { useYouTubeData } from '../../hooks/useYouTubeData';
import { useLeftColumn } from '../../hooks/useLeftColumn';
import Loading from '../Loading/Loading';
import { callApi } from '../../helper/callApi';
import { errorLogger } from '../../helper/errorLogger';
import { Validator } from '../../validators/Validator';


interface Props {
    id: string
}

const InputLink: React.FC<Props> = ({ id }) => {

    const { getInfo } = config.url.download

    const { setLeftColumnVisible } = useLeftColumn();
    const { fetchYouTubeData, setFetchYouTubeData } = useYouTubeData();

    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false);

    const endFetch = () => {
        setInputValue('')
        setLoading(false)
        setLeftColumnVisible(true)
    }

    const getYouTubeData = async () => {
        if(Validator.youtube(inputValue)) {
            setLoading(true)
            setError(false)
            const { response, err } = await callApi(getInfo, 'GET', { url: inputValue })
            
            if (response) {
                setFetchYouTubeData([...fetchYouTubeData, response.data])
                endFetch()
            }
            if(err) errorLogger(err);
        } else {
            setError(true)
        }
    }

    return (
        <>
            {loading && <Loading />}
            <styled.Container id={id}>
                <styled.Header>Music from <span style={{ color: 'orange' }} >YouTube</span></styled.Header>
                <styled.InputWrapper error = {error}>
                    <styled.Input placeholder='YouTube link' onChange={e => setInputValue(e.target.value)} value={inputValue} />
                    <styled.SearchIconContainer>
                        <styled.SearchIcon onClick={getYouTubeData} />
                    </styled.SearchIconContainer>
                </styled.InputWrapper>
                {error && <styled.Error>Url is invalid</styled.Error>}
            </styled.Container>
        </>
    )
}

export default InputLink;