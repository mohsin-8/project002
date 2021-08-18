import React, { useState } from 'react';

function UseState() {
    let [isAge, setAge] = useState(0);
    return (
        <div>
            <h1>Update the Age: {isAge}</h1>
            <button onClick={() => setAge(isAge + 1)}>Increase</button>
            <button onClick={() => setAge(isAge - 1)}>Decrease</button>
        </div>
    )
}

export default UseState;
