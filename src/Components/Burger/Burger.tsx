import { Dispatch, SetStateAction, useState } from "react";
import classes from "./Burger.module.scss";

type Props = {
  setNav: Dispatch<SetStateAction<boolean>>;
};

export const Burger = ({ setNav }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={`${classes.burger} ${isActive && classes.open}`}
        onClick={() => {
          setIsActive(!isActive);
          setNav(!isActive);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
