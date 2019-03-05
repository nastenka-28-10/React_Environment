import React, { Component } from 'react';

import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = ({ todos, onTodoClick }) => (
    <div>
        <ul className="todos">
            { todos.map( (todo) =>
                <Todo
                    key={ todo.id }
                    { ...todo }
                    onClick={ () => onTodoClick(todo.id) }
                />
            ) }
        </ul>
    </div>
)

export default TodoList;

