import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  authUser,
  clearError,
  createNewUser,
  selectError,
  selectIsLoading,
} from '../../store/authSlice';

import {
  Container,
  Heading,
  Form,
  Input,
  Error,
  Button,
} from './AuthenticationStyles';
import Spinner from '../spinner/Spinner';

type AuthenticationProps = {
  onCloseAuth: () => void;
  userData: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  };
};

const Authentication = ({ onCloseAuth, userData }: AuthenticationProps) => {
  const [key1, setKey1] = useState('');
  const [key2, setKey2] = useState('');
  const [key3, setKey3] = useState('');
  const [key4, setKey4] = useState('');
  const [key5, setKey5] = useState('');
  const [key6, setKey6] = useState('');

  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await dispatch(
      createNewUser({
        ...userData,
        secretKey: `${key1}${key2}${key3}${key4}${key5}${key6}`,
      })
    );

    if (response.hasOwnProperty('error')) return;

    onCloseAuth();

    if (error) {
      dispatch(clearError());
    }

    dispatch(authUser());
  };

  return (
    <Container>
      <Heading>Authentication</Heading>
      {error && <Error>{error}</Error>}
      <Form onSubmit={onSubmitHandler}>
        <Input
          value={key1}
          onChange={(e) => setKey1(e.currentTarget.value)}
          type="text"
          maxLength={1}
        />
        <Input
          value={key2}
          onChange={(e) => setKey2(e.currentTarget.value)}
          type="text"
          maxLength={1}
        />
        <Input
          value={key3}
          onChange={(e) => setKey3(e.currentTarget.value)}
          type="text"
          maxLength={1}
        />
        <Input
          value={key4}
          onChange={(e) => setKey4(e.currentTarget.value)}
          type="text"
          maxLength={1}
        />
        <Input
          value={key5}
          onChange={(e) => setKey5(e.currentTarget.value)}
          type="text"
          maxLength={1}
        />
        <Input
          value={key6}
          onChange={(e) => setKey6(e.currentTarget.value)}
          type="text"
          maxLength={1}
        />
        <Button type="submit">
          {isLoading ? <Spinner size="3rem" /> : 'Submit'}
        </Button>
      </Form>
    </Container>
  );
};

export default Authentication;
