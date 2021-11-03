import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RegisterUser from "./components/RegisterUser";
import UserContext from "./UserContext";
import axios from "axios";
import LoginUser from "./components/LoginUser";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/islogedin", {
        withCredentials: true,
      })
      .then((res) => {
        setUsername(res.data.username);
      });
  }, []);

  const logOut = () => {
    axios
      .post("http://localhost:4000/user/logout", {}, { withCredentials: true })
      .then(() => setUsername(""));
  };

  return (
    <UserContext.Provider value={{ username: username, setUsername }}>
      <BrowserRouter>
        <div className="App">Friends & Cook</div>
        <div>
          {!!username && (
            <div>
              {" "}
              Du är nu inloggad som {username}{" "}
              <button onClick={logOut}>Logga ut</button>
            </div>
          )}
          {!username && <div>Du är inte inloggad</div>}
        </div>
        <div>
          <Link to={"/login"}>Login</Link> ||
          <Link to={"/Register"}>Registrera</Link>
        </div>
        <Switch>
          <Route exact path={"/Register"} component={RegisterUser} />
          <Route exact path={"/Login"} component={LoginUser} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
