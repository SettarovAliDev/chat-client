import styled from '@emotion/styled';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const BackdropInner = styled.div`
  position: relative;
`;

export const StyledModal = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 1.4rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledClose = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 7px;
  right: 7px;
  z-index: 90;
  background: linear-gradient(92.68deg, #7cb8f7 0%, #2a8bf2 100%);
  box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15),
    4px 4px 25px rgba(42, 139, 242, 0.05),
    10px 6px 25px rgba(42, 139, 242, 0.15);
  border: none;
  outline: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
`;
