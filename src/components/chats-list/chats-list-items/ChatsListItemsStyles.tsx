import styled from '@emotion/styled';

export const ChatItem = styled.div`
  background-color: var(--color-white);
  padding: 3rem 4rem 4rem;
  border-radius: 6px;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
