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

export const Button = styled.button`
  align-self: center;
  font-size: 2rem;
  font-weight: 500;
  background: linear-gradient(92.68deg, #7cb8f7 0%, #2a8bf2 100%);
  box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15),
    4px 4px 25px rgba(42, 139, 242, 0.05),
    10px 6px 25px rgba(42, 139, 242, 0.15);
  border: none;
  border-radius: 0.6rem;
  outline: none;
  padding: 1.3rem 5rem;
  color: var(--color-white);
  cursor: pointer;
`;
