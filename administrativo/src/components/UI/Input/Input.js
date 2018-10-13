import React from 'react';
import classes from './Input.css';

const input = props => {
    let inputElement = null;

    switch (props.type) {

        case 'select':
            inputElement = <select
                value={props.value}
                className={classes.Select}
                onChange={props.changed} >
                    {props.options.map(option => (
                        <option
                            key={option.value}
                            value={option.value} >
                            {option.displayValue}
                        </option>
                ))}
            </select>
            break;
        case 'textarea':
            break;

        case 'password':
            inputElement = <input
                type="password"
                value={props.value}
                onChange={props.changed}
                className={classes.Password} />
            break;
        case 'date':
        default:
            inputElement = <input
                type="text"
                value={props.value}
                onChange={props.changed}
                className={classes.Text} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;