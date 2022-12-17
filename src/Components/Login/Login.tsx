import { useState } from "react";
import classes from "./Login.module.scss";
import axios from "axios";

const handleLogin = () => {};

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.login}>
      <form onSubmit={handleLogin}>
        <h2>Battle Legion - Tracking System</h2>
        <div className={classes.group}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.group}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" className={classes.btn} value="Log in" />
      </form>
    </div>
  );
};
