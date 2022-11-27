import classes from "./Modal.module.scss";
import { Backdrop } from "./Backdrop";

type Props = {
  onClose: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Modal = ({ onClose, onClick, children }: Props) => {
  return (
    <>
      <Backdrop onClose={onClose} />

      <div onClick={onClick} className={classes.modal}>
        {children}
      </div>
    </>
  );
};
