import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';
import { theme } from '../../theme';

const Body = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: -0.25rem auto 0;
  padding: ${theme.fontSizes.large};

  figure {
    margin: 1rem auto;
    text-align: center;
  }

  img {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const Text = ({ post }) => {
  const content = post.trail.reduce((acc, tumblr, index) => {
    if (tumblr.blog.name !== 'dentednerd' || index > 0) {
      acc.push(`<a class="reblog-byline" href="https://${tumblr.blog.name}.tumblr.com">${tumblr.blog.name}:</a>`);
      acc.push(`<blockquote>${tumblr.content_raw}</blockquote>`);
    }
    return acc;
  }, []).join("");

  return (
    <Post post={post}>
      {post.title && <h2>{post.title}</h2>}
      <Body dangerouslySetInnerHTML={{ __html: content || post.body }} />
    </Post>
  )
}

export default Text;
