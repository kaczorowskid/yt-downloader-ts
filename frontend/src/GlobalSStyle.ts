import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{wallpaper?: string}>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    html {
        /* background-image: url(${props => props.wallpaper});
        height: 100%;
        width: 100%;
        background-color: black;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;  */
    }
`;

export default GlobalStyle;