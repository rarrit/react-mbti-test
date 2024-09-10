import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'EF_jejudoldam';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
    font-family: 'MinSans-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: 'EF_jejudoldam';
    box-sizing: border-box;
  }
  .minSans {
    font-family: 'MinSans-Regular' !important;
  }
  body {
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(76,148,190,1) 100%);
  }
`;

export default GlobalStyle;