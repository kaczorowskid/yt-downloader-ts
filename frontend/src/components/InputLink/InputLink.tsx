import React, { useEffect, useState } from 'react';
import * as styled from './InputLink.styled';
import axios from 'axios';
import { config } from '../../config';
import { useYouTubeData } from '../../hooks/useYouTubeData';
import { useLeftColumn } from '../../hooks/useLeftColumn';
import Loading from '../Loading/Loading';

interface Props {
    id: string
}

const InputLink: React.FC<Props> = ({ id }) => {

    const { getInfo } = config.url.download

    const { setLeftColumnVisible } = useLeftColumn();
    const { fetchYouTubeData, setFetchYouTubeData } = useYouTubeData();

    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)

    const endFetch = () => {
        setInputValue('')
        setLoading(false)
        setLeftColumnVisible(true)
    }

    const getYouTubeData = () => {
        setLoading(true)
        axios.get(getInfo, {
            params: {
                url: inputValue
            }
        })
        .then(res => setFetchYouTubeData([...fetchYouTubeData, res.data]))
        .catch(e => console.log(e))
        .finally(endFetch)
    }



    return (
        <>
        { loading && <Loading /> } 
        <styled.Container id = {id}>
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