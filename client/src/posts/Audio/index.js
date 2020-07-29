import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';
import { theme } from '../../theme';

const StyledAudio = styled.div`
  padding: ${theme.fontSizes.large} 0;

  .tumblr_audio_player {
    height: 85px !important;
  }
`;

const Caption = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: 0 auto;
  padding: ${theme.fontSizes.large};
  
  img {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const Audio = ({ post }) => {
  const content = post.trail.reduce((acc, tumblr, index) => {
    if (tumblr.blog.name !== 'dentednerd' || index > 0) {
      acc.push(`<a class="reblog-byline" href="https://${tumblr.blog.name}.tumblr.com">${tumblr.blog.name}:</a>`);
      acc.push(`<blockquote>${tumblr.content_raw}</blockquote>`);
    }
    return acc;
  }, []).join("");

  return (
    <Post post={post}>
      {post.source_title === "Spotify" && <div dangerouslySetInnerHTML={{ __html: post.player }} />}
      {post.source_title !== "Spotify" && <StyledAudio dangerouslySetInnerHTML={{ __html: post.embed }} />}
      {(content || post.caption) && <Caption dangerouslySetInnerHTML={{ __html: content || post.caption }} />}
    </Post>
  )
}

export default Audio;
