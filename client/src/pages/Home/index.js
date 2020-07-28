import React, { useState, useEffect } from 'react';
import Photo from '../../posts/Photo';
import Text from '../../posts/Text';
import Video from '../../posts/Video';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('api/posts')
    .then(res => res.json())
    .then(posts => setPosts(posts));
  }, []);

  return (
    <div>
      {(!posts || posts.length < 1) && (
        <p>spaghetti-os</p>
      )}
      {posts.map(post => {
        switch (post.type) {
          case 'photo':
            return <Photo post={post} />
          case 'text':
            return <Text post={post} />
          case 'video':
            return <Video post={post} />
          default:
            return (
              <p>handle this post</p>
            )
        }
      })}
    </div>
  )
}

export default Home;
