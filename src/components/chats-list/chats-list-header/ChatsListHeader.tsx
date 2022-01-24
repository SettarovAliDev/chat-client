import { useSocket } from '../../../contexts/socket-context/SocketContext';
import { Button } from '../../button/Button';
import Dropdown from '../../dropdown/Dropdown';

import { Container, Heading, PlusIcon } from './ChatsListHeaderStyles';

const ChatsListHeader = () => {
  const { createRoom } = useSocket();

  const onCreateRoomHandler = () => {
    createRoom(['settarov.ali@gmail.com', 'alisettarovcrazy@gmail.com']);
    console.log('chat');
  };

  return (
    <Container>
      <div>
        <Heading>Chats</Heading>
        <Dropdown>Recent Chats</Dropdown>
      </div>
      <Button onClick={onCreateRoomHandler}>
        <PlusIcon /> Create New Chat
      </Button>
    </Container>
  );
};

export default ChatsListHeader;
