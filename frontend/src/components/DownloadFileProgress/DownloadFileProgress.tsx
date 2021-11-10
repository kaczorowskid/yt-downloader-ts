import React from 'react';
import * as styled from './DownloadFileProgress.styled';
import { IDownloadData } from '../../types/IDownloadData';

interface Props {
    data: Array<IDownloadData>
}

const DownloadFileProgress: React.FC<Props> = ({ data }) => (
    <styled.Container>
        {data.map((data, i) => (
            <styled.Item key={i}>
                <styled.DownloadFileTitle>{data.title}</styled.DownloadFileTitle>
                <styled.ProgressBarContainer>
                    <styled.ProgressBarBackground>
                        <styled.Percent>{data.percent}%</styled.Percent>
                        <styled.ProgressBarFiller progress={data.percent} />
                    </styled.ProgressBarBackground>
                </styled.ProgressBarContainer>
            </styled.Item>
        ))}
    </styled.Container>
)


export default DownloadFileProgress;