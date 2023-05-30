import React from "react";
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={`${classes.page} ${classes.home}`}>
      <img src="images/logo.png" className={classes.banner} />
    </div>
  );
};
