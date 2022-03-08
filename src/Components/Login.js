import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    PageContainer,
    FormContainer,
    FormLabel,
    FormText,
    LoginSignupDiv,
    ButtonStyle,
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
            <h1>Login</h1>
            <FormContainer>
                <form onChange={handleChange}>
                    <div>
                        <FormLabel htmlFor='user'>Username</FormLabel>
                        <FormText type='text' name='user' />
                    </div>

                    <br />
                    <div>
                        <FormLabel htmlFor='pass'>Password</FormLabel>
                        <FormText type='password' />
                    </div>
                    <LoginSignupDiv>
                        <ButtonStyle>Login</ButtonStyle>
                        <ButtonStyle onClick={() => navigate('/signup')}>
                            Sign up
                        </ButtonStyle>
                    </LoginSignupDiv>
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
