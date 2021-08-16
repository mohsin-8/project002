import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let [isAge, setAge] = useState(0);

    function lightColor() {
        console.log("Lignt is Change Successfully");
        setLit(!isLit);
    }

    function IncreaseAge() {
        console.log('change Age');
        setAge(++isAge);
    }
    function DecreaseAge() {
        console.log('change Age');
        setAge(--isAge);
    }
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            <h3>This Room is: {isLit ? "light" : "dark"}</h3>
            <button onClick={lightColor}>Light theme</button>
            <button onClick={lightColor}>Dark theme</button>

            <h3>Update Age: {isAge}</h3>
            <button onClick={IncreaseAge}>Increase Age</button>
            <button onClick={DecreaseAge}>Decrease Age</button>
        </div>
    )
}

export default Room;
