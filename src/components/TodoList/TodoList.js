import React, { Component } from 'react';

import FilterLink from '../../containers/FilterLink';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from "../../constants/visibilityFilterActionTypes";
import './TodoList.scss';

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter( item => item.completed)
        case SHOW_ACTIVE:
            return todos.filter( item => !item.completed)
    }
}

export default class TodoList extends Component {
    render() {
        const { todos, visibilityFilter, onAddTodo, onToggleTodo } = this.props;
        const visibleTodos = getVisibleTodos( todos, visibilityFilter )
        let nextTodoId = 0;
        return(
            <div className="todo-wrapper">
                <div className="todo-wraper__form">
                    <input ref = { node => {
                        this.input = node;
                    }} />
                    <button onClick={
                        () => {
                            onAddTodo(todos.length, this.input.value)
                            this.input.value = '';
                        }
                    }>
                        Add task
                    </button>
                </div>
                <p>
                    Show:
                    {'  '}
                    <FilterLink filter='SHOW_ALL'>
                        All
                    </FilterLink>
                    {'  '}
                    <FilterLink filter='SHOW_ACTIVE'>
                        Active
                    </FilterLink>
                    {'  '}
                    <FilterLink filter='SHOW_COMPLETED'>
                        Completed
                    </FilterLink>
                </p>
                <div>
                    <ul className="todos">
                        { visibleTodos.map( (todo, index) =>
                            <li key = { index }
                                onClick = { () => {
                                    onToggleTodo( index )
                                } }
                                style = {{
                                    textDecoration:
                                        todo.completed ?
                                            'line-through':
                                            'none'
                                }}>
                                { todo.text }
                            </li>
                        ) }
                    </ul>
                </div>
            </div>
        )
    }
}

