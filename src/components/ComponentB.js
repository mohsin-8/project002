import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { FirstName } from '../App';

function ComponentB() {
    const fname = useContext(FirstName);

    return (
        <div>
            <p>My First Name is {fname}, This first name is display from ComponentB with help of useContext</p>
            <ComponentC />
        </div>
    )
}

export default ComponentB;
