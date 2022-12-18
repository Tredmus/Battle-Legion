import classes from "./Map.module.scss";
import RKMap from "../../Components/RKMap/RKMap";
import "./Map.css";
import { useState, useEffect } from "react";
import { Login } from "../../Components/Login/Login";

export const Map = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('loggedBLUser');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={classes.map}>{isLoggedIn ? <RKMap /> : <Login />}</div>
  );
};