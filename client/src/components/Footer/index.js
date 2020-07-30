import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
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

  a {
    color: #fff;
    margin: 0 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <Nav>
      <Link to={'/posts/text'}>
        words
      </Link>
      <Link to={'/posts/photo'}>
        pictures
      </Link>
      <Link to={'/posts/audio'}>
        sounds
      </Link>
      <Link to={'/posts/video'}>
        videos
      </Link>
      <Link to={'/posts/chat'}>
        conversations
      </Link>
      <Link to={'/posts/quote'}>
        quotes
      </Link>
      <Link to={'/posts/link'}>
        links
      </Link>
      <Link to={'/posts/answer'}>
        answers
      </Link>
    </Nav>
  </StyledFooter>
)

export default Footer;
