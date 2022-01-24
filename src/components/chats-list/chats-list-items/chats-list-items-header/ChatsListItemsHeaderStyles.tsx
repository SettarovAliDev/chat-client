import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.7rem;
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

export const Avatar = styled.img`
  height: 5.4rem;
  width: 5.4rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const Online = styled.div`
  top: 2px;
  left: 2px;
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: #00c305;
  border-radius: 50%;
  border: 1.5px solid var(--color-white);
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

export const Status = styled.div`
  font-size: 1.6rem;
  color: var(--color-active);
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: var(--text-color-light);
  font-size: 1.6rem;
`;
