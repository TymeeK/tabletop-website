import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PropTypes from 'prop-types';
import Homepage from './Components/Homepage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Router>
    );
}

App.propTypes = {};

export default App;
