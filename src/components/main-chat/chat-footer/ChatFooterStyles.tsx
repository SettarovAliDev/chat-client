import styled from '@emotion/styled';

import { ReactComponent as Plus } from '../../../assets/plus.svg';
import { ReactComponent as Navigation } from '../../../assets/navigation.svg';
import { ReactComponent as Smile } from '../../../assets/smile.svg';

export const ContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
`;

export const Line = styled.div`
  margin: 0 6rem;
  height: 2px;
  background: rgba(112, 124, 151, 0.15);
  border-radius: 2px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.9rem 6rem 3rem;
`;

export const PlusAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background: linear-gradient(325.78deg, #2a8bf2 14.76%, #7cb8f7 87.3%);
  margin-right: 2rem;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    transform: scale(1.2);
  }
`;

export const PlusIcon = styled(Plus)`
  cursor: pointer;
  fill: var(--text-color-light);
`;

export const NavigationAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background: linear-gradient(325.78deg, #2a8bf2 14.76%, #7cb8f7 87.3%);
  margin-left: 3.2rem;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    transform: scale(1.2);
  }
`;

export const NavigationIcon = styled(Navigation)`
  cursor: pointer;
  fill: var(--text-color-light);
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const SmileIcon = styled(Smile)`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    transform: scale(1.2);
  }
`;

export const Input = styled.input`
  color: var(--text-color-dark);
  flex: 1;
  font-size: 2rem;
  height: 100%;
  border: none;
  outline: none;

  ::placeholder {
    color: rgba(112, 124, 151, 0.5);
  }
`;
