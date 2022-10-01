import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, img, h2, h1, p, span, main, header, ul, li, div, h3, button, form{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  body{
    
    width: 100vw;
    height: 100vh;

  }

  :root{
    --primary: #27AE60;
    --primary-50: #93D7AF;
    --secundary: #EB5757;

    --grey-100: #333333;
    --grey-50:#828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;

  }
`;

export default GlobalStyle;
