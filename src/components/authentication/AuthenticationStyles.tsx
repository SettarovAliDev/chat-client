import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 5rem;
`;

export const Heading = styled.h1`
  margin-bottom: 5rem;
  line-height: 1.5;
  color: var(--text-color-dark);
`;

export const Form = styled.form`
  display: flex;
  column-gap: 2rem;
`;

export const Input = styled.input`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  border: none;
  border-radius: 6px;
  outline: none;
  height: 5rem;
  width: 3.4rem;
  color: var(--text-color-light);
  background: var(--color-white);
  box-shadow: 0px 10px 55px rgba(0, 0, 0, 0.05),
    0px 4px 10px rgba(0, 0, 0, 0.25), 0px 10px 25px rgba(0, 0, 0, 0.05);
`;
