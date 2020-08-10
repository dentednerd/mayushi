import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Post from '../../components/Post';
import { theme } from '../../theme';

const LinkH2 = styled.h2`
  margin-top: -0.25rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Link = ({ post }) => (
  <Post post={post}>
    {post.link_image && <Image src={post.link_image} alt={post.title} />}
    {post.title && (
      <LinkH2>
        <a href={post.url}>
          <FontAwesomeIcon style={{ marginRight: theme.fontSizes.medium }} icon={faExternalLinkAlt} />
          {post.title}
        </a>
      </LinkH2>
    )}
  </Post>
);

export default Link;
