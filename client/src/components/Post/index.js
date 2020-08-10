import React from 'react';
import styled from 'styled-components';
import PostCaption from '../PostCaption';
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

  h1 {
    display: inline;
    font-family: inherit;
    color: inherit;
    font-size: ${theme.fontSizes.large};
    line-height: ${theme.fontSizes.large};
    font-family: 'Open Sans Condensed', sans-serif;
    text-transform: none;
    margin: 0;
    padding: 0;
    border-bottom: none;
    width: auto;
  }
`;

const Post = ({ post, children }) => {
  let content;
  if (post.trail) content = post.trail.reduce((acc, tumblr, index) => {
    if (tumblr.blog.name === 'dentednerd' && index === 0) {
      acc.push(tumblr.content_raw);
    }
    if (tumblr.blog.name !== 'dentednerd' || index > 0) {
      acc.push(`<a class="reblog-byline" href="https://${tumblr.blog.name}.tumblr.com">${tumblr.blog.name}:</a>`);
      acc.push(`<blockquote>${tumblr.content_raw}</blockquote>`);
    }
    return acc;
  }, []).join("");

  return (
    <StyledPost>
      {children}
      {post.trail && <PostCaption content={content} />}
      <PostFooter post={post} />
    </StyledPost>
  );
};

export default Post;
