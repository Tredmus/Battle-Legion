import { useState } from "react";
import classes from "./Legionary.module.scss";
import { Modal } from "../Modal/Modal";
import { Medals } from "./Medals";

export type TypeLegionary = {
  name: string;
  rank: string;
  legion: string;
  medals: [
    { name: string; description: string; image: string; awarded: boolean }
  ];
};

export const Legionary = ({ name, rank, legion, medals }: TypeLegionary) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageLink = `Images/people/${name}.png`;
  const defaultImage = "Images/people/default.png";
  // const picture = new URL(imageLink).protocol ? imageLink : defaultImage;

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  if (name === "Leora") rank = "Praetor";
  return (
    <>
      {isOpen && (
        <Modal onClose={close}>
          <div className={classes.modal}>
            <div className={classes.legionary} onClick={open}>
              <div className={classes.imageWrapper}>
                <img
                  src="Images/border.png"
                  alt=""
                  className={classes.border}
                />
                <img src={imageLink} alt="" />
              </div>
              <p className={classes.about}>
                <img
                  src="Images/border.png"
                  alt=""
                  className={classes.border}
                />
                {name}
                <br></br>
                Rank - {rank}
                <br></br>Legion - Battle Legion - {legion} Legion
              </p>
              <Medals medals={medals} />
            </div>
          </div>
        </Modal>
      )}

      <div className={classes.legionary} onClick={open}>
        <div className={classes.imageWrapper}>
          <img src="Images/border.png" alt="" className={classes.border} />
          <img src={imageLink} alt="" />
        </div>
        <p className={classes.about}>
          <img src="Images/border.png" alt="" className={classes.border} />
          {name}
        </p>
      </div>
    </>
  );
};
