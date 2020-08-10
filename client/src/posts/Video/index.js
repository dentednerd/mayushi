import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';

const Video = ({ post }) => {
  if (!post) return null;
  const StyledVideo = styled.video`
    background-image: url(${post.thumbnail_url});
    background-size: cover;
    background-position: center;
    margin: 0 -4rem;
    height: 450px;
    width: 800px;

    @media(max-width: 767px) {
      margin: 0;
      height: calc(100vw * 0.5625);
      width: 100vw;
    }
  `;

  const StyledYoutube = styled.iframe`
    margin: 0 -4rem;
    height: 450px;
    width: 800px;
    border: none;

    @media(max-width: 767px) {
      margin: 0;
      height: calc(100vw * 0.5625);
      width: 100vw;
    }
  `;

  return (
    <Post post={post}>
      {(post.video && post.video.youtube)
        ? (
        <StyledYoutube id="ytplayer" type="text/html" width="800" height="450"
        src={`https://www.youtube.com/embed/${post.video.youtube.video_id}`}
        frameborder="0" />
        ) : (
          <StyledVideo width="800" height="450" controls>
            <source src={post.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        )}
    </Post>
  )
}

export default Video;
