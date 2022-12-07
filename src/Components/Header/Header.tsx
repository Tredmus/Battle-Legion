import classes from "./Header.module.scss";
import { Burger } from "../Burger/Burger";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setNav: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ setNav }: Props) => {
  return (
    <div className={classes.header}>
      <Burger setNav={setNav} />
      <img src="Images/logo.png" alt="" />
    </div>
  );
};
