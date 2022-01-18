import {
  Container,
  Avatar,
  UserInfo,
  Username,
  LastSeen,
  Actions,
  ActionItem,
  AttachIcon,
  MoreIcon,
} from './ChatHeaderStyles';

import avatar from '../../../assets/user-avatar-2.jpg';

const ChatHeader = () => {
  return (
    <Container>
      <Avatar src={avatar} />
      <UserInfo>
        <Username>Nika Jerrardo</Username>
        <LastSeen>last online 5 hours ago</LastSeen>
      </UserInfo>
      <Actions>
        <ActionItem>
          <AttachIcon />
        </ActionItem>
        <ActionItem>
          <MoreIcon />
        </ActionItem>
      </Actions>
    </Container>
  );
};

export default ChatHeader;
