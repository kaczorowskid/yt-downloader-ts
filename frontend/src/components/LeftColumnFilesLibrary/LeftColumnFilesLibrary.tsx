import React from 'react';
import * as styled from './LeftColumnFilesLibrary.styled';
import { useLeftColumn } from '../../hooks/useLeftColumn';

const LeftColumnFilesLibrary: React.FC = () => {

    const { leftColumnVisible, setLeftColumnVisible } = useLeftColumn()

    return (
        <>
            <styled.Container visible = {leftColumnVisible} >
                <styled.ItemContainerWrapper>
                    <styled.ItemContainer>
                    {`${leftColumnVisible}`}
                    </styled.ItemContainer>
                    <styled.ItemContainer>

                    </styled.ItemContainer>
                    <styled.ItemContainer>

                    </styled.ItemContainer>
                    <styled.ItemContainer>

                    </styled.ItemContainer>
                    <styled.ItemContainer>

                    </styled.ItemContainer>
                    <styled.ItemContainer>

                    </styled.ItemContainer>
                    <styled.ItemContainer>

                    </styled.ItemContainer>
                    <styled.ItemContainer>

                    </styled.ItemContainer>
                    <styled.ItemContainer>

</styled.ItemContainer>
<styled.ItemContainer>

</styled.ItemContainer>
<styled.ItemContainer>

</styled.ItemContainer>
<styled.ItemContainer>

</styled.ItemContainer>
<styled.ItemContainer>

</styled.ItemContainer>
<styled.ItemContainer>

</styled.ItemContainer>
                </styled.ItemContainerWrapper>
            </styled.Container>
            <styled.ArrowIconContainer visible = {leftColumnVisible} onClick = {() => setLeftColumnVisible((prev: boolean) => !prev)} >
                {leftColumnVisible ? <styled.ArrowLeftIcon /> : <styled.ArrowRightIcon />}
            </styled.ArrowIconContainer>
        </>
    )
}

export default LeftColumnFilesLibrary;