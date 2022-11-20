import React from "react";
import classes from "./Home.module.scss";
import logo from "../../Assets/Images/logo.png";

export const Home = () => {
  return (
    <div className={`${classes.page} ${classes.home}`}>
      <img src={logo} alt="logo" className={classes.logo} />
      <h1>Боен Легион</h1>
    </div>
  );
};
