import classes from "./Header.module.scss";
import { Burger } from "../Burger/Burger";
import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  isActive: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ setNav, isActive }: Props) => {
  return (
    <div className={classes.header}>
      <Burger setNav={setNav} isActive={isActive} />
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : "")}
        onClick={() => {
          setNav(false);
        }}
      >
        <img src="Images/logo.png" alt="" />
      </NavLink>
    </div>
  );
};
