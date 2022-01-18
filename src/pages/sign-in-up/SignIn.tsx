import { useState } from 'react';

import {
  Container,
  Form,
  Input,
  Button,
  HeadingNavLink,
} from './SignInUpStyles';
import { MainHeading } from '../../GlobalStyles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmailHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const onChangePasswordHandler = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <MainHeading>
        <HeadingNavLink to="/sign-in">Sign In</HeadingNavLink> /{' '}
        <HeadingNavLink to="/sign-up">Sign Up</HeadingNavLink>
      </MainHeading>
      <Form onSubmit={onSubmitHandler}>
        <Input
          placeholder="E-Mail"
          value={email}
          onChange={onChangeEmailHandler}
          id="email"
          type="email"
          autoComplete="off"
          required
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={onChangePasswordHandler}
          id="password"
          type="password"
          autoComplete="off"
          required
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
