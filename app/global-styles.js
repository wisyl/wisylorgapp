import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
  }

  body.fontLoaded {
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
