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

const Audio = ({ post }) => (
  <Post post={post}>
    {post.source_title === "Spotify" && <div dangerouslySetInnerHTML={{ __html: post.player }} />}
    {post.source_title !== "Spotify" && <StyledAudio dangerouslySetInnerHTML={{ __html: post.embed }} />}
  </Post>
);

export default Audio;
