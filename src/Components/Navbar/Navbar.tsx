import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { icons } from "../../Assets/Icons/Icons";

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">
            <div className={classes.link}>
              <icons.AiFillHome />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div className={classes.link}>
              <icons.BsInfoCircleFill />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/history">
            <div className={classes.link}>
              <icons.BiBook />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
