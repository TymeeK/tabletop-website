import React from 'react';
import { NavLink, NavContainer } from '../Styling/Homepage.Style';
// import '../Styling/reset.css';

function Homepage() {
    return (
        <>
            <NavContainer>
                <h1>This is a horrible navbar!</h1>
                <ul>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/signup'>Signup</NavLink>
                </ul>
            </NavContainer>
        </>
    );
}

export default Homepage;
