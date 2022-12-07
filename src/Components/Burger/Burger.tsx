import { Dispatch, SetStateAction } from "react";
import classes from "./Burger.module.scss";

type Props = {
  isActive: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

export const Burger = ({ setNav, isActive }: Props) => {
  return (
    <>
      <div
        className={`${classes.burger} ${isActive && classes.open}`}
        onClick={() => {
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
