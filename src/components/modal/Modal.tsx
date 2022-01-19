import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import {
  StyledBackdrop,
  BackdropInner,
  StyledModal,
  StyledClose,
} from './ModalStyles';

let modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'overlays');
document.body.appendChild(modalRoot);

type ModalProps = {
  children: JSX.Element;
  onCloseAuthHandler: () => void;
};

const Modal = ({ children, onCloseAuthHandler }: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <StyledBackdrop>
          <BackdropInner>
            <StyledClose onClick={onCloseAuthHandler}>&#10005;</StyledClose>
            <StyledModal>{children}</StyledModal>
          </BackdropInner>
        </StyledBackdrop>,
        modalRoot
      )}
    </Fragment>
  );
};

export default Modal;
