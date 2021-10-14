import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as styled from './FolderInfo.styled';
import { config } from '../../config';
import { useCurrentFolder } from '../../hooks/useCurrentFolder';

const FolderInfo: React.FC = () => {

    const { getAllDataPath } = config.url.data;

    const { currentlyFolderView } = useCurrentFolder();

    const [data, setData] = useState<Array<any>>([]);

    useEffect(() => {
        axios.get(getAllDataPath, {
            params: {
                id: currentlyFolderView
            }
        })
        .then(res => setData(res.data))
    }, [currentlyFolderView])


    return (
        <>
            <styled.Wrapper>
                <styled.Container>
                    {data.map(i => <styled.Card> {i.title} </styled.Card>)}
                </styled.Container>
            </styled.Wrapper>
        </>
    )
}

export default FolderInfo;