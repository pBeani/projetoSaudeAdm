import React from 'react';
import classes from './Col.css';

const col = props => {

    const colClasses = props.className ? props.className.split(' ') : [];
    const classList = [];

    for (let i = 0; i < colClasses.length; i++) {
        classList.push(classes[colClasses[i]]);
    }

    return (
        <div className={classList.join(" ")}>{props.children}</div>
    );
}

export default col;