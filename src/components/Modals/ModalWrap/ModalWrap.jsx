import css from "./ModalWrap.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ModalWrap = ({ children, isOpen, handleClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.modalBackdrop}
      bodyOpenClassName="no-scroll"
      className={css.modalContent}
    >
      {children}
    </Modal>
  );
};
