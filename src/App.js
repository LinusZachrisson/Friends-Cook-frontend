import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">Friends & Cook</div>

      <div>
        <Link to={"/login"}>Login</Link> ||
        <Link to={"/Register"}>Register</Link>
      </div>
      <Switch>
        <Route exact path={"/Register"} component={RegisterUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
