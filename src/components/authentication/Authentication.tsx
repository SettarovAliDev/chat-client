import { useState } from 'react';

import { useAppDispatch } from '../../store/store';
import { createNewUser } from '../../store/authSlice';

import { Container, Heading, Form, Input } from './AuthenticationStyles';

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

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(
      createNewUser({
        ...userData,
        secretKey: `${key1}${key2}${key3}${key4}${key5}${key6}`,
      })
    );

    onCloseAuth();

    console.log('close');
  };

  return (
    <Container>
      <Heading>Authentication</Heading>
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
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

export default Authentication;
