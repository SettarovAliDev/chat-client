import { SpinnerContainer, SpinnerOverlay } from './SpinnerStyles';

type SpinnerProps = {
  size?: string;
  big?: boolean;
};

const Spinner = ({ size, big }: SpinnerProps) => {
  return (
    <SpinnerOverlay big={big}>
      <SpinnerContainer size={size} />
    </SpinnerOverlay>
  );
};

export default Spinner;
