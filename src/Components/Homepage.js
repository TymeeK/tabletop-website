import React from 'react';
import {
    NavLink,
    NavContainer,
    ContentContainer,
} from '../Styling/Homepage.Style';
// import '../Styling/reset.css';

function Homepage() {
    return (
        <>
            <NavContainer>
                <h1>Tabletop website</h1>
                <ul>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/signup'>Signup</NavLink>
                </ul>
            </NavContainer>
            <ContentContainer>
                {/* I want an image here showing the dnd handbook*/}
                {/* I want to have some text showing off that it's dnd */}
                <div>
                    <h1>Dnd is life</h1>
                </div>
                <div>
                    <h1>Test</h1>
                </div>
            </ContentContainer>
        </>
    );
}

export default Homepage;
