import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { config } from '../../config';
import { useLibraryData } from '../../hooks/useLibraryData';
import * as styled from './FoldersCard.styled';
import { callApi } from '../../helper/callApi';

interface Props {
    close: () => void,
    youtubeData: any
}

const FoldersCard: React.FC<Props> = ({ close, youtubeData }) => {

    const { addDataPath } = config.url.data;
    const { libraryFolders } = useLibraryData();

    const [isAdded, setIsAdded] = useState<boolean>(false);

    const saveInFolder = (folderData: any) => {
        setIsAdded(true)
        console.log(folderData)
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

        const timeout = setTimeout(() => {
            setIsAdded(false)
            close()
        }, 2000)

        return () => clearTimeout(timeout)
    }

    return (
        <>
            <styled.Container>
                {isAdded ? (
                    <styled.AddedIcon></styled.AddedIcon>
                ) : (
                    <>
                        <styled.Title>Add music to folder</styled.Title>
                        <styled.ItemsContainerWrapper>
                            <styled.ItemsContainer>
                                {libraryFolders.map((folder, i) => <styled.Item key={i} onClick={() => saveInFolder(folder)} >{folder.title}</styled.Item>)}
                            </styled.ItemsContainer>
                        </styled.ItemsContainerWrapper>
                        <styled.ButtonContainer>
                            <styled.Button onClick={close} >Close</styled.Button>
                        </styled.ButtonContainer>
                    </>)}
            </styled.Container>
        </>
    )
}

export default FoldersCard;