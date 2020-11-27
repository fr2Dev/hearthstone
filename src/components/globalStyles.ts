import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background-color: #1D2635;
        color: #fdfdfd;
        font-family: Arial, sans-serif;
    }
    ul {
      list-style-type: none;
    }
    img{
        display: block;
    }
  
`;

export default GlobalStyles;
