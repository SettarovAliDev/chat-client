import ChatsList from '../../components/chats-list/ChatsList';
import MainChat from '../../components/main-chat/MainChat';

import { Container } from './ChatStyles';

const Chat = () => {
  return (
    <Container>
      <ChatsList />
      <MainChat />
    </Container>
  );
};

export default Chat;
