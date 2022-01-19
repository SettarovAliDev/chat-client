import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageNotFoundStyled = styled.div`
  margin: 15rem auto;
  font-size: 3.6rem;
  font-weight: 400;
  text-align: center;
`;

export const Button = styled(Link)`
  align-self: center;
  padding: 1rem 2.5rem;
  margin-top: 6.5rem;
  font-size: 2.4rem;
  color: var(--color-white);
  letter-spacing: 0.75px;
  background-color: var(--color-active);
  border: none;
  border-radius: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0px 10px 55px rgba(0, 0, 0, 0.05),
    0px 4px 10px rgba(0, 0, 0, 0.25), 0px 10px 25px rgba(0, 0, 0, 0.05);
`;
