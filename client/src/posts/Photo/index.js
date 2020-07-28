import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';
import { theme } from '../../theme';

const Image = styled.img`
  max-width: 800px;
  margin: 0 auto;
`;

const Caption = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: -0.25rem auto 0;
  background-color: #fff7f0;
  padding: ${theme.fontSizes.large};

  blockquote {
    margin: ${theme.fontSizes.medium} 0 ${theme.fontSizes.medium} ${theme.fontSizes.small};
    padding-left: ${theme.fontSizes.medium};
    border-left: solid 1px ${theme.colors.lightBlue};
  }
`;

const Photo = ({ post }) => {
  return (
    <Post>
      <Image src={post.photos[0].original_size.url} alt={post.photos[0].caption} />
      <Caption dangerouslySetInnerHTML={{ __html: post.caption }} />
    </Post>
  )
}

export default Photo;
