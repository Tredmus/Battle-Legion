import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { icons } from "../../Assets/Icons/Icons";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isActive: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({ isActive, setNav }: Props) => {
  return (
    <nav className={`${classes.nav} ${isActive && classes.active}`}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.AiFillHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.BsInfoCircleFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.BiBook />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/people"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.BsPeopleFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/structure"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.MdAccountTree className={classes.treeIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/media"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.FiFilm />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/invite"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={() => {
              setNav(false);
            }}
          >
            <icons.MdPersonAdd />
          </NavLink>
        </li>
      </ul>

      <img
        src="Images/banner-bottom.png"
        alt="gasgasg asg asg"
        className={classes.bottom}
      />
    </nav>
  );
};
