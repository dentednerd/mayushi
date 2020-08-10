import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const StyledCaption = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: -0.25rem auto 0;
  padding: ${theme.fontSizes.large};

  figure {
    margin: 1rem auto;
    text-align: center;
    max-width: 100%;

    @media(max-width: 767px) {
      iframe {
        height: calc((100vw - 4rem) * 0.5625);
        width: calc(100vw - 4rem);
      }
    }
  }

  img {
    width: 100%;
  }
`;

const PostCaption = ({ content }) => {
  if (!content) return null;
  
  return (
    <StyledCaption dangerouslySetInnerHTML={{ __html: content }}/>
  );
};

export default PostCaption;
