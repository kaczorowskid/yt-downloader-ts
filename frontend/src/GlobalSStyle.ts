import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{wallpaper?: string}>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    html {

    }
`;

export default GlobalStyle;