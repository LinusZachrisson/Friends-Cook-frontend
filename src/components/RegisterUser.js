import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";

function RegisterUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);

  const registerNewUser = (e) => {
    e.preventDefault();

    const data = { username, password };
    axios
      .post("http://localhost:4000/user/register", data, {
        withCredentials: true,
      })
      .then((res) => {
        user.setUsername(res.data.username);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => registerNewUser(e)}>
        <h2>Register User</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterUser;
