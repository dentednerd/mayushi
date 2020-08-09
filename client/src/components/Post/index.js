import React from 'react';
import styled from 'styled-components';
import PostFooter from '../PostFooter';
import { theme } from '../../theme';

const StyledPost = styled.article`
  position: relative;
  margin: 2rem auto;
  background: ${theme.colors.midPeach};
  width: calc(100% - 8rem);
  max-width: calc(800px - 8rem);

  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Post = ({ post, children }) => {
  // console.log('Post: ', post);

  return (
    <StyledPost>
      {children}
      <PostFooter post={post} />
    </StyledPost>
  )
}

export default Post;
