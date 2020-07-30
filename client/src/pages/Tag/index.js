import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import Photo from '../../posts/Photo';
import Text from '../../posts/Text';
import Video from '../../posts/Video';
import Audio from '../../posts/Audio';
import Link from '../../posts/Link';
import Quote from '../../posts/Quote';
import Chat from '../../posts/Chat';

const Tag = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { tag } = props.match.params;
  console.log('Tag page: ', currentPage);

  useEffect(() => {
    fetch(`../api/tag/${tag}/${currentPage}`)
    .then(res => res.json())
    .then(posts => setPosts(posts));
  }, [tag, currentPage]);

  return (
    <div>
      {(!posts || posts.length < 1) && (
        <Loading />
      )}
      {posts.length === 20 && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          &laquo; older
        </button>
      )}
      {currentPage > 1 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          newer &raquo;
        </button>
      )}
      {posts.map(post => {
        switch (post.type) {
          case 'photo':
            return <Photo post={post} />
          case 'text':
            return <Text post={post} />
          case 'video':
            return <Video post={post} />
          case 'audio':
            return <Audio post={post} />
          case 'chat':
            return <Chat post={post} />
          case 'link':
            return <Link post={post} />
          case 'quote':
            return <Quote post={post} />
          default:
            return (
              <p>handle this post</p>
            )
        }
      })}
    </div>
  )
}

export default Tag;






