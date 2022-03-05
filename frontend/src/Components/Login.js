import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Login() {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function handleChange(event) {
        if (event.target.name === 'user') {
            setUser(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    }

    return (
        <div>
            <form onChange={handleChange}>
                <label htmlFor='user'>Username</label>
                <br />
                <input type='text' name='user' />
                <br />
                <label htmlFor='pass'>Password</label>
                <br />
                <input type='password' />
                <br />
                <button>Login</button>
                <button onClick={() => navigate('/signup')}>Sign up</button>
            </form>
        </div>
    );
}

Login.propTypes = {
    user: PropTypes.string,
    password: PropTypes.string,
};

export default Login;
