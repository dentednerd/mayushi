import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledHeader = styled.header`
  background-color: ${theme.colors.midBlue};
  color: #fff;
  font-family: Raleway, sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.lightPeach};
  padding: ${theme.fontSizes.small};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  border-top: solid 1px ${theme.colors.lightPeach};

  a {
    color: #fff;
    margin: 0 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const Header = () => (
  <StyledHeader>
    <h1>
      <Link to={'/'}>
        Dented Nerd
      </Link>
    </h1>
    <Description>You know how some blogs have a snappy tagline? Yeah.</Description>
    <Nav>
      <Link to={'/text'}>
        words
      </Link>
      <Link to={'/photo'}>
        pictures
      </Link>
      <Link to={'/audio'}>
        sounds
      </Link>
      <Link to={'/video'}>
        videos
      </Link>
      <Link to={'/chat'}>
        conversations
      </Link>
      <Link to={'/quote'}>
        quotes
      </Link>
      <Link to={'/link'}>
        links
      </Link>
    </Nav>
  </StyledHeader>
);

export default Header;
