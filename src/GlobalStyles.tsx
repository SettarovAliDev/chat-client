import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyles = css`
  :root {
    --text-color-dark: #0d1c2e;
    --text-color-light: #707c97;
    --color-active: #2a8bf2;
    --color-indicator: #ff3366;
    --color-white: #ffffff;
    --color-light: #fafbff;
    --color-light-blue: #e6ecfe;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-weight: 500;
    color: var(--text-color-dark);
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
    min-height: 100vh;
  }
`;

export const MainHeading = styled.h2`
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 2.6;
`;
