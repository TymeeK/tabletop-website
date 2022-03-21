import React, { useState, useEffect } from 'react';
import { GridContainer } from '../../Styling/Gameboard/Gameboard.Style';
import Squares from './Squares';

function Gameboard() {
    const [components, setComponents] = useState([]);
    const [rows, setRows] = useState(10);
    const [cols, setCols] = useState(10);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(event) {
        event.preventDefault();

        event.target.id === 'row'
            ? setRows(event.target.value)
            : setCols(event.target.value);
    }

    function addSquares() {
        for (let i = 0; i < rows * cols; i++) {
            setComponents(prevState => [...prevState, <Squares key={i} />]);
        }
    }
    function onSubmit(event) {
        event.preventDefault();
        setComponents([]);
        setIsSubmitted(true);
        addSquares();
    }

    useEffect(() => {
        return () => {
            setIsSubmitted(false);
        };
    }, []);

    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor='row'>Row</label>
                <input type='text' id='row' onChange={handleChange} />
                <label htmlFor='col'>Columns</label>
                <input type='text' id='col' onChange={handleChange} />
                <input type='submit' />
            </form>
            <GridContainer gridRow={rows} gridCol={cols}>
                {isSubmitted ? components.map(item => item) : ''}
            </GridContainer>
        </>
    );
}

export default Gameboard;
