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
          {/* Komponent för inloggade användare */}
          {!!username && (
            <div>
              {" "}
              Du är nu inloggad som {username}{" "}
              {/* logga ut knapp i komponent för inloggade användare */}
              <button onClick={logOut}>Logga ut</button>
            </div>
          )}
          {!username && <div>Inte inloggad</div>}
        </div>
        <div>
          <Link to={"/Register"}>Registrera ny användare</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <LoginUser />
          </Route>
          <Route exact path={"/Register"} component={RegisterUser} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
