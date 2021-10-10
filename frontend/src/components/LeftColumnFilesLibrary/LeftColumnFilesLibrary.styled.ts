import styled, { css } from 'styled-components';
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap'

export const Container = styled.div<{visible: boolean}>`
    position: fixed;
    top: 0;
    left: ${props => props.visible ? '0%' : '-30%'};
    width: 30%;
    height: 100%;
    border: 2px solid red;
    background: red;
    z-index: 10;
    overflow: auto;
    transition: all .5s ease;
`;

export const ItemContainerWrapper = styled.div`
    width: 100%;
    height: 300vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ItemContainer = styled.div`
    width: 90%;
    height: 200px;
    background: green;
    margin: 2px;
`;

export const ArrowIconContainer = styled.div<{visible: boolean}>`
    position: fixed;
    left: ${props => props.visible ? '30%' : '0%'};
    width: 50px;
    height: 50px;
    background: #1E1E1E;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: 50%;
    transform: translate(0, -50%);
    transition: all .5s ease;
`;

const iconStyle = css`
    width: 30px;
    height: 30px;
    color: white;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`${iconStyle}`;
export const ArrowRightIcon = styled(ArrowRight)`${iconStyle}`;