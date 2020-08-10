import React from 'react';
import Post from '../../components/Post';

const Text = ({ post }) => (
  <Post post={post}>
    {post.title && <h2>{post.title}</h2>}
  </Post>
);

export default Text;
