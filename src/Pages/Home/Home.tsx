import React from "react";
import classes from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={`${classes.page} ${classes.home}`}>
      <div className={classes.banners}>
        <div className={`${classes.banner}`}>
          <img src="Images/banner-0.png" alt="" />
        </div>
        <div className={`${classes.banner}`}>
          <img src="Images/banner-1.png" alt="" />
        </div>
        <div className={`${classes.banner}`}>
          <img src="Images/banner-2.png" alt="" />
        </div>
        <div className={`${classes.banner}`}>
          <img src="Images/banner-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};
