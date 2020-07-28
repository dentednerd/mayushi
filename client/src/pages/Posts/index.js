import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('api/posts')
    .then(res => res.json())
    .then(posts => setPosts(posts));
  });
  return (
    <>
      <p>Posts</p>
      {posts.map(post => (
        <div>
          <a href={post.post_url}>
            {post.post_url}
          </a>
        </div>
      ))}
    </>
  )
}

export default Posts;
