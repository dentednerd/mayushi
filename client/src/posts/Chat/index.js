import React from 'react';
import styled from 'styled-components';
import Post from '../../components/Post';
import { theme } from '../../theme';

const ChatBox = styled.section`
  display: flex;
  flex-flow: column nowrap;
  max-width: calc(800px - 4rem);
  margin: 0;
  padding: ${theme.fontSizes.medium};
`;

const Chatter = styled.div`
  border-radius: ${theme.fontSizes.medium};
  padding: ${theme.fontSizes.medium};
  width: 50%;
  margin: ${theme.fontSizes.small} auto;
  text-align: center;

  .their-name {
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.75rem;
  }
`;

const Left = styled(Chatter)`
  background: ${theme.colors.lightPeach};
  margin-left: 0;
  text-align: left;
`;

const Right = styled(Chatter)`
  align-self: flex-end;
  background: ${theme.colors.darkBlue};
  margin-right: 0;
  color: #fff;
  text-align: left;
`;

const Chat = ({ post }) => {
  return (
    <Post post={post}>
      <ChatBox>
        {post.dialogue.map(line => {
          if (!line.label) return (
            <Chatter>
              <p>{line.phrase || "..."}</p>
            </Chatter>
          );
          if (line.label.match(/me|Me/g) || !line.label) return (
            <Right>
              {(line.name !== "me" || line.name !== "Me") && <p className="their-name">{line.name}</p>}
              <p>{line.phrase || "..."}</p>
            </Right>
          );
          return (
            <Left>
              <p className="their-name">{line.name}</p>
              <p>{line.phrase || "..."}</p>
            </Left>
          );
        })}
      </ChatBox>
    </Post>
  )
}

export default Chat;
