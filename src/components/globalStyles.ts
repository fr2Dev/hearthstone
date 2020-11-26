import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    ul {
      list-style-type: none;
    }
    img{
        display: block;
    }
  
`;

export default GlobalStyles;
