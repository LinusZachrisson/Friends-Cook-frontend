import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RegisterUser from "./components/RegisterUser";
import UserContext from "./UserContext";
import axios from "axios";

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

  return (
    <UserContext.Provider value={{ username: username, setUsername }}>
      <BrowserRouter>
        <div className="App">Friends & Cook</div>
        <div>
          {!!username && <div> Du är nu inloggad som {username}</div>}
          {!username && <div>Du är inte inloggad</div>}
        </div>
        <div>
          <Link to={"/login"}>Login</Link> ||
          <Link to={"/Register"}>Register</Link>
        </div>
        <Switch>
          <Route exact path={"/Register"} component={RegisterUser} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
