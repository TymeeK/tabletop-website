import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    PageContainer,
    FormContainer,
    FormLabel,
    FormDiv,
    FormText,
    SubmitButton,
} from '../Styling/Form.Style';

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
        <PageContainer>
            <FormContainer>
                <form onChange={handleChange}>
                    <div>
                        <FormLabel htmlFor='user'>Username</FormLabel>
                        <br />
                        <FormText type='text' name='user' />
                    </div>

                    <br />
                    <div>
                        <FormLabel htmlFor='pass'>Password</FormLabel>
                        <br />
                        <FormText type='password' />
                    </div>

                    <br />
                    <button>Login</button>
                    <button onClick={() => navigate('/signup')}>Sign up</button>
                </form>
            </FormContainer>
        </PageContainer>
    );
}

Login.propTypes = {
    user: PropTypes.string,
    password: PropTypes.string,
};

export default Login;
