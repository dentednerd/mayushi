import React, { useState, useEffect } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('api/posts')
    .then(res => res.json())
    .then(posts => setPosts(posts));
  });
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.post_url}>
          <a href={post.post_url}>
            {post.post_url}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Home;
