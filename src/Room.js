import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let [isAge, setAge] = useState(0);
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            <h2>This Room is {isLit ? 'light' : 'dark'}</h2>
            <button onClick={() => setLit(!isLit)}>Light Button</button>
            <button onClick={() => setLit(!isLit)}>Dark Button</button>

            <h2>Age: {isAge} </h2>
            <button onClick={() => setAge(++isAge)}>Increase Age</button>
            <button onClick={() => setAge(--isAge)}>Decrease Age</button>
        </div>
    )
}

export default Room;
