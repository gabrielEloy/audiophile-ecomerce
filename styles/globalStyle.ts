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
        background: ${({ theme }) => theme.lightGray};
        font-family: 'Manrope', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
    }
`;

export default GlobalStyle;
