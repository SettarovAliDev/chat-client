import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { StyledBackdrop, StyledModal } from './ModalStyles';

let modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'overlays');
document.body.appendChild(modalRoot);

type ModalProps = {
  children: JSX.Element;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <StyledBackdrop>
          <StyledModal>{children}</StyledModal>
        </StyledBackdrop>,
        modalRoot
      )}
    </Fragment>
  );
};

export default Modal;
