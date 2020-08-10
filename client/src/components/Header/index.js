import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';
import Nav from '../Nav';

const StyledHeader = styled.header`
  background-color: ${theme.colors.midBlue};
  color: #fff;
  font-family: ${theme.fontFamilies.title};
  width: 100%;
`;

const Description = styled.p`
  margin: 0 0 1rem;
`;

const Header = () => (
  <StyledHeader>
    <h1>
      <Link to={'/'}>
        Dented Nerd
      </Link>
    </h1>
    <Description>Adorable little urchin.</Description>
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
  </StyledHeader>
);

export default Header;
