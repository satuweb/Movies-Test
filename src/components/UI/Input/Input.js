import React from 'react';

import classes from './Input.module.css';

const Input = props => (
    <select
        className={classes.input}
        value={props.value}
        onChange={props.changed}
    >
        {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
    </select>
)


export default Input;