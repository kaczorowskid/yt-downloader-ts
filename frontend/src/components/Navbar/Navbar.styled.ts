import styled, { css } from 'styled-components';
import { MusicNoteBeamed, Search } from '@styled-icons/bootstrap'
import { device } from '../../helper/deviceSize'
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap'

export const Container = styled.div<{isTop?: boolean}>`
    background: ${props => props.isTop ? '#16161d' : 'white'};
    width: 100%;
    height: 150px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    position: fixed;
    transition: all 1s ease;
    z-index: 1;
`;

export const ItemNavbarContainer = styled.div<{isTop?: boolean}>`
    height: ${props => props.isTop ? '60%' : '100%'};
    color: ${props => props.isTop ? 'white' : 'black'};
    display: flex;
    align-items: center;
    position: absolute;
    left: 250px;
    transition: all 1s ease;

    @media only screen and (${device.laptop}) {
        left: 50px;
    }

`;

export const ItemNavbar = styled.div<{isTop?: boolean}>`
    font-size: 15px;
    font-weight: bold;
    margin: 0 10px;
    cursor: pointer;

    &:hover {
        border: ${props => props.isTop ? '3px solid orange' : '3px solid black'};
        border-top: none;
        border-left: none;
        border-right: none;
    }
`;

export const AccountContainer = styled.div<{isTop?: boolean}>`
    height: ${props => props.isTop ? '60%' : '100%'};
    display: flex;
    align-items: center;
    position: absolute;
    right: 250px;
    transition: all 1s ease;

    @media only screen and (${device.laptop}) {
        right: 50px;
    }
`;

export const Log = styled.div<{isTop?: boolean}>`
    background: ${props => props.isTop ? 'white' : '#16161d'};
    color: ${props => props.isTop ? 'black' : 'white'};
    width: 50px;
    height: 30px;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 1s ease;
`;

export const MusicIcon = styled(MusicNoteBeamed)<{isTop?: boolean}>`
    color: ${props => props.isTop ? 'white' : 'black'};
    display: ${props => props.isTop ? 'block' : 'none'};
    width: 30px;
    height: 30px;
    position: absolute;
    top: 100px;
    left: 260px;
    transition: all 1s ease;
`;

export const InputContainer = styled.div<{isTop: boolean, isVisible: boolean}>`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 500px;
    height: ${props => props.isTop ? '60%' : '100%'};
    transition: all 1s ease;
    display: ${props => props.isVisible ? 'none' : 'flex'};
    align-items: center;
`;

export const InputWrapper = styled.div`
    width: 500px;
    height: 45px;
    display: flex;

    @media only screen and (${device.laptop}) {
        display: none;
    }
`;

export const Input = styled.input`
    width: 90%;
    height: 100%;
`;

export const SearchgIconContainer = styled.div`
    width: 10%;
    height: 100%;
    background: #16161d;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchIcon = styled(Search)`
    color: white;
    width: 30px;
    height: 30px;
`;

export const ArrowIconContainer = styled.div<{visible: boolean, isTop: boolean}>`
    position: fixed;
    left: ${props => props.visible ? '30%' : '0%'};
    width: 50px;
    height: 50px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    top: ${props => props.isTop ? '5%' : '8%'};
    transform: translate(0, -50%);
    transition: all 1s ease;
    cursor: pointer;
    color: ${props => props.isTop ? 'white' : 'black'};

    @media only screen and (${device.laptop}) {
        left: ${props => props.visible ? '85%' : '0%'};
    }
`;


const iconStyle = css`
    width: 30px;
    height: 30px;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`${iconStyle}`;
export const ArrowRightIcon = styled(ArrowRight)`${iconStyle}`;