import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledFooter = styled.footer`
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.lightPeach};
  padding: ${theme.fontSizes.small};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;

  a {
    color: #fff;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    Built by me, because I am cool.
  </StyledFooter>
)

export default Footer;
