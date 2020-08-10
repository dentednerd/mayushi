import React from 'react';
import Post from '../../components/Post';
import PostCaption from '../../components/PostCaption';

const Quote = ({ post }) => {
  return (
    <Post post={post}>
      <h2 dangerouslySetInnerHTML={{ __html: post.text }} />
      <PostCaption content={post.source} />
    </Post>
  )
}

export default Quote;
