import ChatsListHeader from './chats-list-header/ChatsListHeader';
import ChatsListItems from './chats-list-items/ChatsListItems';
import ChatsListSearch from './chats-list-search/ChatsListSearch';

import { Container, ContainerInner } from './ChatsListStyles';

const ChatsList = () => {
  return (
    <Container>
      <ContainerInner>
        <ChatsListHeader />
        <ChatsListSearch />
        <ChatsListItems />
      </ContainerInner>
    </Container>
  );
};

export default ChatsList;
