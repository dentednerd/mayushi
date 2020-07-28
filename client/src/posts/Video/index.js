import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';
import { theme } from '../../theme';

const Caption = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: -0.25rem auto 0;
  background-color: #fff7f0;
  padding: ${theme.fontSizes.large};

  blockquote {
    margin: ${theme.fontSizes.medium} 0 ${theme.fontSizes.medium} ${theme.fontSizes.small};
    padding-left: ${theme.fontSizes.medium};
    border-left: solid 1px ${theme.colors.lightBlue};
  }
`;

const Video = ({ post }) => {
  return (
    <Post>
      <video width="800" height="450" controls>
        <source src={post.video_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Caption dangerouslySetInnerHTML={{ __html: post.caption }} />
    </Post>
  )
}

export default Video;
