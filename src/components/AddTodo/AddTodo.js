import React from 'react';

import './AddTodo.scss';

const AddTodo = ({ todos, onAddTodo }) => {
    let input;
    return(
        <div className="todo-wrapper">
            <div className="todo-wraper__form">
                <input ref = { node => {
                    input = node;
                }} />
                <button onClick={
                    () => {
                        onAddTodo(todos.length, input.value)
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