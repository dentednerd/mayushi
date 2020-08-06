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
    overflow-x: hidden;
  }

  p {
    margin: ${theme.fontSizes.medium} 0;
  }

  p:first-child {
    margin-top: 0;
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

  a.reblog-byline {
    display: inline-block;
    font-family: Raleway, sans-serif;
    padding: ${theme.fontSizes.small};
    background-color: ${theme.colors.midBlue};
    color: #fff;
    margin: 0 0 ${theme.fontSizes.medium};
  }

  h1 {
    display: inline-block;
    font-family: Raleway, sans-serif;
    color: #fff;
    font-size: ${theme.fontSizes.xLarge};
    line-height: ${theme.fontSizes.xLarge};
    font-family: 'Open Sans Condensed', sans-serif;
    text-transform: uppercase;
    margin: 0 0 1rem;
    padding: 1rem 0;
    border-bottom: solid 1px #fff;
    width: auto;
    
    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  h2 {
    display: block;
    background-color: #fff7f0;
    color: #384977;
    font-family: Raleway, sans-serif;
    box-shadow: 0px 2px 4px #b17948;
    padding: ${theme.fontSizes.large};
    text-align: center;
    max-width: 800px;
    margin: 0 -4rem;
    z-index: 2;
    font-weight: 500;

    a.reblog-byline {
      display: block;
      font-family: Raleway, sans-serif;
      font-size: ${theme.fontSizes.medium};
      padding: ${theme.fontSizes.small};
      background-color: ${theme.colors.midBlue};
      color: #fff;
      margin: 0 0 ${theme.fontSizes.medium};
    }
  }

  blockquote {
    margin-bottom: ${theme.fontSizes.large};

    blockquote {
      padding-left: ${theme.fontSizes.medium};
      border-left: dotted 1px ${theme.colors.midBlue};
      margin: ${theme.fontSizes.medium};
      font-family: Raleway, sans-serif;

      &:last-of-type {
        margin-bottom: ${theme.fontSizes.medium};
      }
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    h2 {
      background: transparent;
      text-align: left;
      padding: 0 0 ${theme.fontSizes.medium};
      box-shadow: none;
      margin: 0;
      width: 100%;
      max-width: 100%;
    }
  }

  ul, ol {
    margin: 1rem 2rem;

    li {
      margin-bottom: ${theme.fontSizes.medium};
    }
  }
`
