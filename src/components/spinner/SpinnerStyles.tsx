import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

type SpinnerOverlayProps = {
  big: boolean | undefined;
};

type SpinnerContainerProps = {
  size: string | undefined;
};

const spin = keyframes`
  to {
      -webkit-transform: rotate(360deg);
    }
`;

export const SpinnerOverlay = styled.div<SpinnerOverlayProps>`
  height: ${(props) => (props.big ? '100vh' : '100%')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  display: inline-block;
  width: ${(props) => props.size || '4rem'};
  height: ${(props) => props.size || '4rem'};
  border: 3px solid rgba(236, 235, 235, 0.856);
  border-radius: 50%;
  border-top-color: #636767;
  animation: ${(props) => spin} 1s ease-in-out infinite;
  -webkit-animation: ${(props) => spin} 1s ease-in-out infinite;
`;
