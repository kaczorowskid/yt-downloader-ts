import React from 'react';
import * as styled from './Loading.styled';
import Loader from "react-loader-spinner";

const Loading: React.FC = () => {
    return (
        <>
            <styled.Container>
                <Loader
                    type="BallTriangle"
                    color="#00BFFF"
                    height={200}
                    width={200}
                />
            </styled.Container>
        </>
    )
}

export default Loading;