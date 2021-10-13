import React, { useEffect, useState } from 'react';
import * as styled from './InputLink.styled';
import axios from 'axios';
import { config } from '../../config';
import { useYouTubeData } from '../../hooks/useYouTubeData';
import { useLeftColumn } from '../../hooks/useLeftColumn';

const InputLink: React.FC = () => {

    const { getInfo } = config.url.download

    const { setLeftColumnVisible } = useLeftColumn();
    const { fetchYouTubeData, setFetchYouTubeData } = useYouTubeData();

    const [inputValue, setInputValue] = useState<string>('');

    const getYouTubeData = () => {
        axios.get(getInfo, {
            params: {
                url: inputValue
            }
        })
        .then(res => setFetchYouTubeData([...fetchYouTubeData, res.data]))
        .then(() => setInputValue(''))
        .catch(e => console.log(e))
        .finally(() => setLeftColumnVisible(true))
    }



    return (
        <>
        <styled.Container>
            <styled.InputWrapper>
                <styled.Input placeholder = 'YouTube link' onChange = {e => setInputValue(e.target.value)} value = {inputValue} />
                <styled.SearchIconContainer>
                    <styled.SearchIcon onClick = {getYouTubeData} />
                </styled.SearchIconContainer>
            </styled.InputWrapper>
        </styled.Container>
        </>
    )
}

export default InputLink;