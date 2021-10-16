import React, { useState } from 'react';
import * as styled from './Slider.styled'

interface Props {
    data: Array<any>
}

const Slider: React.FC<Props> = ({ data }) => {

    const [count, setCount] = useState<number>(0)

    const handleLeftButton = () => {
        setCount(val => val > 0 ? val - 1 : 0)
    }

    const handleRightButton = () => {
        const len = data.length - 1;
        setCount(val => val < len ? val + 1 : len)
    }

    return (
        <>
            <styled.AppContainer>
                <styled.LeftButton onClick={handleLeftButton} />
                <styled.RightButton onClick={handleRightButton} />
                <styled.Container arrayLen={data.length} count={count} >
                    {data.map((item, i) => (
                        <styled.Item key={i} title={item.title} background={item.img} >
                            <styled.Info>
                                {item.info}
                            </styled.Info>
                        </styled.Item>
                    ))}
                </styled.Container>
            </styled.AppContainer>
        </>
    )
}

export default Slider;