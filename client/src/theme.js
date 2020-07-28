import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    lightPeach: "#ffead8",
    midPeach: "#ffdab9",
    brown: "#804515",
    darkBlue: "#384977",
    midBlue: "#828dac",
    lightBlue: "#a4afce"
  },
  fontSizes: {
    small: "8px",
    medium: "16px",
    large: "32px",
    xLarge: "64px"
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.lightPeach};
    color: ${theme.colors.brown};
    margin: 0 auto;
    font-family: Merriweather, serif;
    font-size: ${theme.fontSizes.medium};
    text-align: center;
  }

  p {
    margin-bottom: ${theme.fontSizes.small};
  }

  p:last-child {
    margin-bottom: 0;
  }

  a {
    color: ${theme.colors.darkBlue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  h1, h1 a {
    font-family: Raleway, sans-serif;
    color: ${theme.colors.darkBlue};
    font-size: ${theme.fontSizes.xLarge};
    line-height: ${theme.fontSizes.xLarge};
    text-decoration: none;
    font-family: 'Open Sans Condensed', sans-serif;
    text-transform: uppercase;
    margin: 1rem 0;
    &:hover {
      text-decoration: none;
    }
  }

  h2 {
    display: block;
    background-color: #fff7f0;
    color: #384977;
    font-family: Raleway, sans-serif;
    letter-spacing: 2px;
    box-shadow: 0px 2px 4px #b17948;
    padding: ${theme.fontSizes.large};
    text-align: center;
  }
`
