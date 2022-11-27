import { useState } from "react";
import classes from "./Legionary.module.scss";
import { Modal } from "../Modal/Modal";

export type TypeLegionary = {
  name: string;
  rank: string;
  legion: string;
};

export const Legionary = ({ name, rank, legion }: TypeLegionary) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageLink = `Images/people/${name}.png`;

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  if (name === "Faraonqbg") rank = "Legatus";
  if (name === "Dudie") rank = "Tribunus";
  return (
    <>
      {isOpen && (
        <Modal onClose={close}>
          <div className={classes.modal}>
            <div className={classes.legionary} onClick={open}>
              <img src={imageLink} alt="" />
              <p>
                {name} . {rank} . Battle Legion - {legion} Legion
              </p>
            </div>
          </div>
        </Modal>
      )}

      <div className={classes.legionary} onClick={open}>
        <div className={classes.imageWrapper}>
          <img src={imageLink} alt="" />
        </div>
        <p>{name}</p>
      </div>
    </>
  );
};
