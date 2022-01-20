import { useEffect, useState } from 'react';

import Modal from '../../components/modal/Modal';
import Authentication from '../../components/authentication/Authentication';
import Spinner from '../../components/spinner/Spinner';

import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  checkRegister,
  clearError,
  selectError,
  selectIsLoading,
} from '../../store/authSlice';

import {
  Container,
  Form,
  Input,
  Button,
  HeadingNavLink,
  Error,
} from './SignInUpStyles';
import { MainHeading } from '../../GlobalStyles';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
  }, [dispatch]);

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

    if (error) {
      dispatch(clearError());
    }

    const response = await dispatch(checkRegister({ email }));
    if (response.hasOwnProperty('error')) return;
    setIsAuthOpen(true);
  };

  const onCloseAuthHandler = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

    setIsAuthOpen(false);
  };

  return (
    <Container>
      {isAuthOpen && (
        <Modal onCloseAuthHandler={onCloseAuthHandler}>
          <Authentication
            registerData={{ email, firstName, lastName, password }}
            onCloseAuth={onCloseAuthHandler}
          />
        </Modal>
      )}
      <MainHeading>
        <HeadingNavLink to="/sign-in">Sign In</HeadingNavLink> /{' '}
        <HeadingNavLink to="/sign-up">Sign Up</HeadingNavLink>
      </MainHeading>
      <Form onSubmit={onSubmitHandler}>
        {error && <Error>{error}</Error>}
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
        <Button type="submit">
          {isLoading ? <Spinner size="3rem" /> : 'Sign Up'}
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
