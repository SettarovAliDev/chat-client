import { selectChats } from '../../../store/chatsSlice';
import { useAppSelector } from '../../../store/store';

import { ChatItem } from './ChatsListItemsStyles';

const ChatsListItems = () => {
  const chats = useAppSelector(selectChats);

  return (
    <div>
      {chats.map((chat) => (
        <ChatItem>{chat.name}</ChatItem>
      ))}
    </div>
  );
};

export default ChatsListItems;
