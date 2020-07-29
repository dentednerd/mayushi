import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';
import { theme } from '../../theme';

const Caption = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: -0.25rem auto 0;
  padding: ${theme.fontSizes.large};
`;

const Video = ({ post }) => {
  const StyledVideo = styled.video`
    background-image: url(${post.thumbnail_url});
    background-size: cover;
    background-position: center;
    margin: 0 -4rem;
    height: 450px;
    width: 800px;
  `;

  const StyledYoutube = styled.iframe`
    margin: 0 -4rem;
    height: 450px;
    width: 800px;
    border: none;
  `;

  const content = post.trail.reduce((acc, tumblr, index) => {
    if (!tumblr.content_raw) return acc;
    if (tumblr.blog.name !== 'dentednerd' || index > 0) {
      acc.push(`<a class="reblog-byline" href="https://${tumblr.blog.name}.tumblr.com">${tumblr.blog.name}:</a>`);
      acc.push(`<blockquote>${tumblr.content_raw}</blockquote>`);
    }
    return acc;
  }, []).join("");

  return (
    <Post post={post}>
      {post.video_type === "youtube" && (
        <StyledYoutube id="ytplayer" type="text/html" width="800" height="450"
        src={`https://www.youtube.com/embed/${post.video.youtube.video_id}`}
        frameborder="0" />
      )}
      {post.video_type !== "youtube" && (
        <StyledVideo width="800" height="450" controls>
          <source src={post.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      )}
      {(content || post.caption) && <Caption dangerouslySetInnerHTML={{ __html: content || post.caption }} />}
    </Post>
  )
}

export default Video;
