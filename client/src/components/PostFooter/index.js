import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { theme } from '../../theme';

const Bar = styled.section`
  max-width: calc(800px - (${theme.fontSizes.large} * 2));
  margin: 0 auto;
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.lightPeach};
  padding: ${theme.fontSizes.small} ${theme.fontSizes.medium};
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  min-height: 1.25rem;
  text-align: left;
  font-size: 0.75rem;
  border-top: solid 1px ${theme.colors.lightPeach};

  a {
    color: #fff;
    margin-right: 1.5rem;
    text-align: left;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostFooter = ({ post }) => {
  return (
    <>
      <Bar>
        {post.source_title && (
          <a href={post.source_url}>Source: {post.source_title}</a>
        )}
        <a href={post.post_url}>{dayjs(post.date).format('DD MMM YYYY')}</a>
      </Bar>
      {post.tags.length > 0 && (
        <Bar>
          {post.tags.map(tag => (
            <Link to={`/tag/${tag}`}>
              {tag}
            </Link>
          ))}
        </Bar>
      )}
    </>
  );
};

export default PostFooter;
