import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    h1{
        font-family: 'Manrope', sans-serif;
    }
`;

export default GlobalStyle;
