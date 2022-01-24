import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50rem;
`;

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  padding: 1.5rem 4rem;
  border: none;
  border-radius: 0.6rem;
  outline: none;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const HeadingNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 5rem;
  line-height: 1.5;
  color: var(--text-color-dark);

  &:hover,
  &:active,
  &.active {
    border-bottom: 3px solid #000000;
  }
`;

export const Error = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  color: #ff8499;
  font-size: 2rem;
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  border: 1px solid #ff8499;
  overflow: hidden;
`;
