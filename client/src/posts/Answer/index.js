import React from 'react';
import Post from '../../components/Post';

const Answer = ({ post }) => (
  <Post post={post}>
    {post.question && (
      <h2>
        <a class="reblog-byline" href={post.asking_url}>{post.asking_name}:</a>
        {post.question}
      </h2>
    )}
  </Post>
);

export default Answer;
