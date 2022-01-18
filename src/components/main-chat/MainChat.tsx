import ChatHeader from './chat-header/ChatHeader';
import ChatMessages from './chat-messages/ChatMessages';
import ChatFooter from './chat-footer/ChatFooter';

import { Container } from './MainChatStyles';

const MainChat = () => {
  return (
    <Container>
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </Container>
  );
};

export default MainChat;
