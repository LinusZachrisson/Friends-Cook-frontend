import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../UserContext';

function LoginUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongLogin, setWrongLogin] = useState(false);

    const user = useContext(UserContext);

    const logInExistingUser = (e) => {
        e.preventDefault();

        const data = { username, password };
        axios
            .post('http://localhost:4000/user/login', data, {
                withCredentials: true,
            })
            .then((res) => {
                user.setUsername(res.data.username);
                setUsername('');
                setPassword('');
                setWrongLogin(false);
            })
            .catch(() => {
                setWrongLogin(true);
            });
    };

    return (
        <div>
            <form onSubmit={(e) => logInExistingUser(e)}>
                {wrongLogin && (
                    <div className='login-error'>
                        Fel användarnamn eller lösenord. <br />
                        Försök igen!
                    </div>
                )}
                <input
                    type='text'
                    placeholder='Användarnamn'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />{' '}
                <br />
                <input
                    type='password'
                    placeholder='Lösenord'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />{' '}
                <br />
                <button type='submit'>Logga in</button>
            </form>
        </div>
    );
}

export default LoginUser;
