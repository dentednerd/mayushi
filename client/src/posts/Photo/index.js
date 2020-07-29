import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';
import { theme } from '../../theme';

const Image = styled.img`
  max-width: calc(800px - 8rem);
  margin: 0 auto;
`;

const Grid = styled.section`
  line-height: 0;
  column-count: 2;
  column-gap: 0px;

  img {
    width: 100% !important;
    height: auto !important;
  }
`;

const Caption = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: -0.25rem auto 0;
  padding: ${theme.fontSizes.large};

  img {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const Photo = ({ post }) => {
  const content = post.trail.reduce((acc, tumblr, index) => {
    if (tumblr.blog.name !== 'dentednerd' || index > 0) {
      acc.push(`<a class="reblog-byline" href="https://${tumblr.blog.name}.tumblr.com">${tumblr.blog.name}:</a>`);
      acc.push(`<blockquote>${tumblr.content_raw}</blockquote>`);
    }
    return acc;
  }, []).join("");

  return (
    <Post post={post}>
      {post.photos.length === 1 && <Image src={post.photos[0].original_size.url} alt={post.photos[0].caption} />}
      {post.photos.length > 1 && (
        <Grid>
          {post.photos.map(pic => (
            <img src={pic.original_size.url} alt={pic.caption} />
          ))}
        </Grid>
      )}
      <Caption dangerouslySetInnerHTML={{ __html: content || post.caption }} />
    </Post>
  )
}

export default Photo;
