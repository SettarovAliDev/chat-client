import { useState } from 'react';

import {
  Container,
  Form,
  Input,
  Button,
  HeadingNavLink,
} from './SignInUpStyles';
import { MainHeading } from '../../GlobalStyles';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeFirstNameHandler = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setFirstName(e.currentTarget.value);
  };

  const onChangeLastNameHandler = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    setLastName(e.currentTarget.value);
  };

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

    setFirstName('');
    setLastName('');
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
          placeholder="First Name"
          value={firstName}
          onChange={onChangeFirstNameHandler}
          id="firstName"
          type="text"
          autoComplete="off"
          required
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={onChangeLastNameHandler}
          id="lastName"
          type="text"
          autoComplete="off"
          required
        />
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
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
