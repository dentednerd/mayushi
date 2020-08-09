import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import Photo from '../../posts/Photo';
import Text from '../../posts/Text';
import Video from '../../posts/Video';
import Audio from '../../posts/Audio';
import Link from '../../posts/Link';
import Quote from '../../posts/Quote';
import Chat from '../../posts/Chat';
import Pagination from '../../components/Pagination';

const Tag = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { tag } = props.match.params;

  useEffect(() => {
    setPosts([]);
    window.scrollTo(0, 0);
    fetch(`../api/tag/${tag}/${currentPage}`)
    .then(res => res.json())
    .then(posts => setPosts(posts));
  }, [tag, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [props.match.params]);

  return (
    <div>
      {(!posts || posts.length < 1) && (
        <Loading />
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
      <Pagination
        count={posts.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Tag;






