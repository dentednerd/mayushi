import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';

const Image = styled.img`
  width: 100%;
  max-width: calc(800px - 8rem);
  margin: 0 auto;
`;

const Row = styled.section`
  display: flex;
  flex-flow: row nowrap;
`;

const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAAEElEQVR42mN8958BCBghFAAivAPdtKQOWQAAAABJRU5ErkJggg==';

const Photo = ({ post }) => {
  if (!post) return null;

  return (
    <Post post={post}>
      {!post.photoset_layout && post.photos.map(pic => {
        return (
          <Image
            src={pic ? pic.original_size.url : placeholderImage}
            alt={pic ? pic.caption : ""}
          />
        );
      })}
      {post.photoset_layout && post.photoset_layout.split('').map(count => {
        let images = [];
        for (let step = 0; step < count; step++) {
          images.push(
            <img
              style={{ width: `calc(100% / ${count})`, margin: '0 auto' }}
              src={post.photos[step] ? post.photos[step].original_size.url : placeholderImage}
              alt={post.photos[step] ? post.photos[step].caption : ""}
            />
          );
        }
        post.photos = post.photos.slice(count);
        return (
        <Row>
          {images}
        </Row>
      )})}
    </Post>
  )
}

export default Photo;
