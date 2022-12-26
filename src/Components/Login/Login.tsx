import { useState } from "react";
import classes from "./Login.module.scss";
import loginService from "../../Services/login";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedBLUser", user.token);
      window.localStorage.setItem("faction", user.faction);

      setUser(user);
      setUsername("");
      setPassword("");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.login}>
      <form onSubmit={handleLogin}>
        <h2>Battle Legion - Tracking System</h2>
        <div className={classes.group}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={classes.group}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" className={classes.btn} value="Log in" />
      </form>
    </div>
  );
};
