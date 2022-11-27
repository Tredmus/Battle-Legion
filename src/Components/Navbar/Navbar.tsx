import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { icons } from "../../Assets/Icons/Icons";

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <icons.AiFillHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <icons.BsInfoCircleFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <icons.BiBook />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/people"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <icons.BsPeopleFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/media"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            <icons.FiFilm />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};