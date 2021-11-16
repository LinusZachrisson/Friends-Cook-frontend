import './css/style.css';
import {
    BrowserRouter,
    Switch,
    HashRouter,
    Route,
    Link,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import RegisterUser from './components/RegisterUser';
import UserContext from './UserContext';
import axios from 'axios';
import LoginUser from './components/LoginUser';
import Navbar from './components/Navbar';

function App() {
    const [username, setUsername] = useState();
    const [newUser, setNewUser] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:4000/user/islogedin', {
                withCredentials: true,
            })
            .then((res) => {
                setUsername(res.data.username);
            });
    }, []);

    const logOut = () => {
        axios
            .post(
                'http://localhost:4000/user/logout',
                {},
                { withCredentials: true }
            )
            .then(() => {
                setUsername();
            });
    };

    return (
        <UserContext.Provider value={{ username: username, setUsername }}>
            {username !== undefined ? (
                <div>
                    <div className='header'>
                        <button onClick={logOut}>Logga ut</button>{' '}
                        <p>
                            Hej, <span>{username}</span>
                        </p>{' '}
                        {/* logga ut knapp i komponent för inloggade användare */}
                    </div>
                    <Navbar user={username} />
                </div>
            ) : (
                <HashRouter basename='/'>
                    <div className='startpage-container'>
                        <h1>Friends&Cook</h1>

                        <Switch>
                            <Route exact path='/'>
                                <LoginUser />
                            </Route>
                            <Route
                                exact
                                path={'/Register'}
                                component={RegisterUser}
                                onClick={() => setNewUser(!newUser)}
                            />
                        </Switch>
                        <div className='new-user'>
                            {!newUser ? (
                                <Link
                                    to={'/Register'}
                                    onClick={() => setNewUser(!newUser)}
                                >
                                    Registrera ny användare
                                </Link>
                            ) : (
                                <Link
                                    to={'/'}
                                    onClick={() => setNewUser(!newUser)}
                                >
                                    Har du redan konto? Logga in
                                </Link>
                            )}
                        </div>
                    </div>
                </HashRouter>
            )}
        </UserContext.Provider>
    );
}

export default App;
