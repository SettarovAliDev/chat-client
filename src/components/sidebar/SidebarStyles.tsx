import styled from '@emotion/styled';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

export const Container = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  width: 290px;
  box-shadow: 14.0351px 0px 25px rgba(86, 128, 248, 0.03),
    35.0877px 0px 70px rgba(86, 128, 248, 0.05),
    23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02);
`;

export const Avatar = styled.img`
  align-self: center;
  width: 8.6rem;
  height: 8.6rem;
  border-radius: 50%;
  margin-top: 9rem;
`;

export const UserTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 1rem 7.6rem 0;
  font-size: 1.8rem;
  text-align: center;
`;

export const ArrowDownStyled = styled(ArrowDown)`
  cursor: pointer;
  margin-left: 6px;
`;
