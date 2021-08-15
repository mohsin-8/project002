import React from 'react';
import './Hello.css';

function Hello(props) {
    return (
        <div>
            <p className="para">This is the paragraph from Hello <strong>{props.firstname}</strong></p>
        </div>
    )
}

export default Hello