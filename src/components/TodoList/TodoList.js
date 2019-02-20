import React, { Component } from 'react';

import AddTodo from '../../containers/AddTodo';
import Filter from '../Filter/Filter';
import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = ({ todos, onTodoClick }) => (
    <div>
        <AddTodo/>
        <Filter/>
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

