import React from 'react';
import classes from './Line.css';

const line = props => {
    return <div className={classes.Line}>{props.children}</div>
}

export default line;