import styled from '@emotion/styled';
import { ReactComponent as Plus } from '../../../assets/plus.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Heading = styled.div`
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 1;
  margin-bottom: 1.5rem;
`;

export const PlusIcon = styled(Plus)`
  cursor: pointer;
  fill: var(--text-color-light);
  margin-right: 7px;
`;
