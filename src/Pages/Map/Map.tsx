import classes from "./Map.module.scss";
import RKMap from "../../Components/RKMap/RKMap";
import "./Map.css";
import { useState } from "react";
import { Login } from "../../Components/Login/Login";

export const Map = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={classes.map}>{isLoggedIn ? <RKMap /> : <Login />}</div>
  );
};
