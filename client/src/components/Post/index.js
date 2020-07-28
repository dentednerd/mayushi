import React from 'react';
import styled from 'styled-components';

const StyledPost = styled.article`
  margin: 2rem 0;
`;

const Post = ({ children }) => {
  return (
    <StyledPost>
      {children}
    </StyledPost>
  )
}

export default Post;
