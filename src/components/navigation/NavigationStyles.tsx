import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuNav = styled.nav`
  flex: 1;
`;

export const MenuList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  margin-bottom: 3.5rem;

  &:last-child {
    margin-top: auto;
  }
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  height: 4rem;
  align-items: center;
  font-size: 1.6rem;
  letter-spacing: 1.5px;
  color: var(--text-color-light);
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &::before {
    display: block;
    content: '';
    width: 3px;
    height: 100%;
    background: transparent;
  }

  &:hover,
  &:active,
  &.active {
    color: var(--color-active);

    svg {
      fill: var(--color-active);
    }

    &::before {
      background: #2a8bf2;
      box-shadow: 1px 0px 10px rgba(42, 139, 242, 0.45),
        0px 0px 10px rgba(42, 139, 242, 0.55),
        4px 0px 25px rgba(42, 139, 242, 0.75);
      border-radius: 3px;
    }
  }
`;

export const menuIcon = (icon: any) => styled(icon)`
  cursor: pointer;
  margin-left: 3.8rem;
  margin-right: 1.7rem;
  fill: var(--text-color-light);
  transition: all 0.3s ease;
`;
