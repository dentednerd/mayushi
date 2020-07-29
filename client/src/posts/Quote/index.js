import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';
import { theme } from '../../theme';

const Body = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: -0.25rem auto 0;
  padding: ${theme.fontSizes.large};

  blockquote {
    margin: ${theme.fontSizes.medium} 0 ${theme.fontSizes.medium} ${theme.fontSizes.small};
    padding-left: ${theme.fontSizes.medium};
    border-left: solid 1px ${theme.colors.lightBlue};

    h2 {
      background: transparent;
      text-align: left;
      padding: 0 0 ${theme.fontSizes.medium};
      box-shadow: none;
    }
  }
`;

const Quote = ({ post }) => {
  return (
    <Post post={post}>
      <h2 dangerouslySetInnerHTML={{ __html: post.text }} />
      <Body dangerouslySetInnerHTML={{ __html: post.source }} />
    </Post>
  )
}

export default Quote;
