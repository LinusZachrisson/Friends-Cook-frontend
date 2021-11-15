import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../UserContext';

function RegisterUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const user = useContext(UserContext);

    const registerNewUser = (e) => {
        e.preventDefault();

        const data = { username, password };
        axios
            .post('https://cook-and-friends.herokuapp.com/user/register', data, {
                withCredentials: true,
            })
            .then((res) => {
                user.setUsername(res.data.username);
                setUsername('');
                setPassword('');
            });
    };

    return (
        <div>
            <form onSubmit={(e) => registerNewUser(e)}>
                <h3>Registrera ny användare:</h3>
                <input
                    type='text'
                    placeholder='Välj användarnamn'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />{' '}
                <br />
                <input
                    type='password'
                    placeholder='Välj lösenord'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />{' '}
                <br />
                <button type='submit'>Registrera</button>
            </form>
        </div>
    );
}

export default RegisterUser;
