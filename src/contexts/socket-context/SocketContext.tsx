import { FC, createContext, useContext, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';
import { addRoom } from '../../store/chatsSlice';
import { useAppDispatch } from '../../store/store';
import { IChat } from '../../types/chat.types';
import { IFile } from '../../types/file.types';
import Actions from './socketActions';

interface IContextValue {
  createRoom: (users: string[], photo?: IFile, name?: string) => void;
}

const SocketContext = createContext({} as IContextValue);

export const useSocket = () => {
  return useContext(SocketContext);
};

const SocketProvider: FC = ({ children }) => {
  const socket = useRef<Socket | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.current = io('http://localhost:3001', {
      auth: {
        token: localStorage.getItem('token'),
      },
    });

    socket.current.on(Actions.ClientConnection, (res) => {
      console.log(res);
    });

    socket.current.on(Actions.ClientCreateRoom, (room: IChat) => {
      socket.current?.emit(Actions.ServerJoinRoom, room.id);
      dispatch(addRoom(room));
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  const createRoom = (users: string[], photo?: IFile, name?: string) => {
    socket.current?.emit(Actions.ServerCreateRoom, {
      users,
      photo,
      name,
    });
  };

  const value: IContextValue = {
    createRoom,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
