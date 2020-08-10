import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledNav = styled.nav`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.lightPeach};
  padding: ${theme.fontSizes.small};
  font-family: ${theme.fontFamilies.title};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;

  @media (max-width: 767px) {
    padding: ${theme.fontSizes.small} 0;
    max-width: 100%;
    flex-flow: row wrap;
    line-height: 1.25rem;
  }

  a {
    color: #fff;
    margin: 0 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Nav = ({ children }) => (
  <StyledNav>
    {children}
  </StyledNav>
);

export default Nav;
