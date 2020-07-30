import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Post from '../../components/Post';
import { theme } from '../../theme';

const Body = styled.section`
  text-align: left;
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: -0.25rem auto 0;
  padding: ${theme.fontSizes.large};

  div.dentednerd {
    blockquote {
      padding-left: ${theme.fontSizes.medium};
      border-left: dotted 1px ${theme.colors.midBlue};
      margin: ${theme.fontSizes.medium};
      font-family: Raleway, sans-serif;

      &:last-of-type {
        margin-bottom: ${theme.fontSizes.medium};
      }
    }
  }

  img {
    width: 100%;
  }

  blockquote {
    h2 {
      background: transparent;
      text-align: left;
      padding: 0 0 ${theme.fontSizes.medium};
      box-shadow: none;
    }
  }
`;

const LinkH2 = styled.h2`
  margin-top: -0.25rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Link = ({ post }) => {
  const content = post.trail.reduce((acc, tumblr, index) => {
    if (tumblr.blog.name !== 'dentednerd' || index > 0) {
      acc.push(`<a class="reblog-byline" href="https://${tumblr.blog.name}.tumblr.com">${tumblr.blog.name}:</a>`);
      acc.push(`<blockquote>${tumblr.content_raw}</blockquote>`);
    }
    return acc;
  }, []).join("");

  return (
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
      {(content || post.description) && <Body dangerouslySetInnerHTML={{ __html: content || `<div class="dentednerd">${post.description}</div>` }} />}
    </Post>
  )
}

export default Link;
