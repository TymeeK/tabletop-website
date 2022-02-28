import React, { useState, useEffect } from 'react';

function Signup() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [repassword, setRepassword] = useState();

    function handleChange(event) {
        event.preventDefault();
        //I feel like I can shorten this but I'm not sure how. Brain fried
        if (event.target.name === 'user') {
            setUsername(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        } else {
            setRepassword(event.target.value);
        }
    }

    function handleClick(event) {
        event.preventDefault();
        password === repassword
            ? console.log('Created account')
            : console.log('Passwords don`t match');
    }
    return (
        <div>
            <form onChange={handleChange}>
                <label htmlFor='user'>Username</label>
                <br />
                <input type='text' name='user' />
                <br />
                <label htmlFor='password'>Password</label>
                <br />
                <input type='password' name='password' />
                <br />
                <label htmlFor='reenter'>Reenter password</label>
                <br />
                <input type='password' name='reenter' />
                <br />
                <button>Create account</button>
            </form>
        </div>
    );
}

export default Signup;
