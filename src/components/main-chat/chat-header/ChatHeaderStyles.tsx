import styled from '@emotion/styled';

import { ReactComponent as Attach } from '../../../assets/attach.svg';
import { ReactComponent as More } from '../../../assets/more.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2.8rem 3.8rem 2.8rem 6rem;
  background-color: var(--color-light);
  border-radius: 6px 6px 0px 0px;
  border-bottom: 2px solid rgba(112, 124, 151, 0.1);
`;

export const Avatar = styled.img`
  height: 5.4rem;
  width: 5.4rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const LastSeen = styled.div`
  font-size: 1.6rem;
  color: var(--color-active);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const ActionItem = styled.div`
  cursor: pointer;
  padding: 1.4rem;
  border-radius: 50%;
  background-color: var(--color-white);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.03),
    0px 7px 25px rgba(42, 139, 242, 0.03), 0px 5px 25px rgba(42, 139, 242, 0.07);
  transition: all 0.3s ease;

  &:hover,
  &:active {
    transform: scale(1.2);
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const AttachIcon = styled(Attach)`
  cursor: pointer;
  fill: var(--text-color-light);
`;

export const MoreIcon = styled(More)`
  cursor: pointer;
  fill: var(--text-color-light);
`;
