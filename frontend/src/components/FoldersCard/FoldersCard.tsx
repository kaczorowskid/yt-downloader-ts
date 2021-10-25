import axios from 'axios';
import React, { useEffect } from 'react';
import { config } from '../../config';
import { useLibraryData } from '../../hooks/useLibraryData';
import * as styled from './FoldersCard.styled';
import { callApi } from '../../helper/callApi';

interface Props {
    close: (val: any) => void,
    youtubeData: any
}

const FoldersCard: React.FC<Props> = ({ close, youtubeData }) => {

    const { addDataPath } = config.url.data;
    const { libraryFolders } = useLibraryData();

    const saveInFolder = (folderData: any) => {
        try {
            callApi(addDataPath, 'POST', {
                folder_id: folderData.id,
                title: youtubeData.title,
                imageSrc: youtubeData.thumbnail,
                url: youtubeData.url
            })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <styled.Container>
                {libraryFolders.map((folder, i) => <styled.Item key={i} onClick={() => saveInFolder(folder)} >{folder.title}</styled.Item>)}
                <button onClick={close} >close</button>
            </styled.Container>
        </>
    )
}

export default FoldersCard;