import { useEffect, useState } from 'react';

import {
  Container,
  Form,
  Input,
  Button,
  HeadingNavLink,
  Error,
} from './SignInUpStyles';
import { MainHeading } from '../../GlobalStyles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  clearError,
  selectError,
  selectIsLoading,
} from '../../store/authSlice';
import Spinner from '../../components/spinner/Spinner';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
  }, [dispatch]);

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
        {error && <Error>{error}</Error>}
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
        <Button type="submit">
          {isLoading ? <Spinner size="3rem" /> : 'Sign In'}
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
