import { FC, createContext, useContext, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';
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

  useEffect(() => {
    socket.current = io('http://localhost:3001', {
      auth: {
        token: localStorage.getItem('token'),
      },
    });

    socket.current.on(Actions.ClientConnection, (res) => {
      console.log(res);
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
