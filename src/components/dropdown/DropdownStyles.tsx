import styled from '@emotion/styled';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

export const DropdownStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--text-color-light);
  cursor: pointer;
`;

export const ArrowDownStyled = styled(ArrowDown)`
  margin-left: 7px;
  stroke: var(--text-color-light);
`;
