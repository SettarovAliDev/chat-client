import { selectChats } from '../../../store/chatsSlice';
import { useAppSelector } from '../../../store/store';

import ChatsListItemsHeader from './chats-list-items-header/ChatsListItemsHeader';

import { ChatItem } from './ChatsListItemsStyles';

const ChatsListItems = () => {
  const chats = useAppSelector(selectChats);

  return (
    <div>
      {chats.map((chat) => (
        <ChatItem key={chat.id}>
          <ChatsListItemsHeader chat={chat} />
        </ChatItem>
      ))}
    </div>
  );
};

export default ChatsListItems;
