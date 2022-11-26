import classes from "./Modal.module.scss";

type Props = {
  onClose: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Modal = ({ onClose, onClick, children }: Props) => {
  return (
    <div onClick={onClick} className={classes.modal}>
      <div className={classes.close} onClick={onClose}></div>
      {children}
    </div>
  );
};
