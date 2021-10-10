import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    top: 150px;
    width: 100%;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
`;

export const FoldersContainer = styled.div`
    width: 80%;
    height: 100vh;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    column-gap: 5px;
    row-gap: 5px;
    align-items: center;
`; 

export const NoLoggedUserContainer = styled.div`
    position: relative;
    top: 150px;
    width: 100%;
    height: 50vh;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
`;

export const NoUserLoggedWarning = styled.div`
    font-size: 40px;
`;

