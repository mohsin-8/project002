import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1;
    }

    if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

function UseReducer() {
    let [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Update the Age: {state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
        </div>
    )
}

export default UseReducer;
