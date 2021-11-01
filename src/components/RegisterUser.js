import React from "react";
import { useState } from "react";
import axios from "axios";

function RegisterUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerNewUser = (e) => {
    e.preventDefault();

    //const data = {email, password}
    //axios.post(url: "", data)
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
