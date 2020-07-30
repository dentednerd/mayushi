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
    width: 100%;
  }
`;

const Answer = ({ post }) => {
  console.log('Answer post', post);

  const content = post.trail.reduce((acc, tumblr, index) => {
    if (tumblr.blog.name !== 'dentednerd' || index > 0) {
      acc.push(`<a class="reblog-byline" href="https://${tumblr.blog.name}.tumblr.com">${tumblr.blog.name}:</a>`);
    }
    acc.push(`<blockquote>${tumblr.content_raw}</blockquote>`);
    return acc;
  }, []).join("");

  return (
    <Post post={post}>
      {post.question && (
        <h2>
          <a class="reblog-byline" href={post.asking_url}>{post.asking_name}:</a>
          {post.question}
        </h2>
      )}
      <Body dangerouslySetInnerHTML={{ __html: content || post.body }} />
    </Post>
  );
}

export default Answer;
