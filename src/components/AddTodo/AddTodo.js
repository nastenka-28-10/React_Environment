import React from 'react';

import './AddTodo.scss';

const AddTodo = ({ onAddTodo }) => {
    let input;
    return(
        <div className="todo-wrapper">
            <div className="todo-wraper__form">
                <input ref = { node => {
                    input = node;
                }} />
                <button onClick={
                    () => {
                        onAddTodo(input.value)
                        input.value = '';
                    }
                }>
                    Add task
                </button>
            </div>
        </div>
    )
}

export default AddTodo;