import React from 'react';
import * as styled from './DownloadFileProgress.styled';

interface Props {
    data: Array<any>
}

const DownloadFileProgress: React.FC<Props> = ({ data }) => {
    return (
        <>
            <styled.Container>
                {data.reverse().map((data, i) => (
                    <styled.Item key = {i}>
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
        </>
    )
}

export default DownloadFileProgress;