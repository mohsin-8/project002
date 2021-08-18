import React from 'react';
import { FirstName, LastName } from '../App';

function ComponentC() {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <div>
                                        <h1>Hello World</h1>
                                        <h2>My Full Name is {fname} {lname}</h2>
                                    </div>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default ComponentC;
