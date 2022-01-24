import {
  Container,
  AvatarContainer,
  Avatar,
  UserInfo,
  Username,
  Status,
  Time,
  Online,
} from './ChatsListItemsHeaderStyles';

import avatar from '../../../../assets/user-avatar-2.jpg';
import { IChat } from '../../../../types/chat.types';

interface ChatsListItemsHeaderProps {
  chat: IChat;
}

const ChatsListItemsHeader = ({ chat }: ChatsListItemsHeaderProps) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src={avatar}></Avatar>
        {chat.online && <Online />}
      </AvatarContainer>

      <UserInfo>
        <Username>{chat.name}</Username>
        <Status>{chat.status}</Status>
      </UserInfo>
      <Time>{chat.time}</Time>
    </Container>
  );
};

export default ChatsListItemsHeader;
