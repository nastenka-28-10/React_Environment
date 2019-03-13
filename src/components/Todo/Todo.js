import React, { Component } from 'react';

const Todo = ({
    text,
    completed,
    onClick
              }) => (
    <li
        onClick = { onClick }
        style = {{
        textDecoration:
            completed ?
                'line-through':
                'none'
    }}>
        { text }
    </li>
)

export default Todo;

