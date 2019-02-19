import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import { toggleTodo } from "../actionCreators/todoActions";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from "../constants/visibilityFilterActionTypes";

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

const mapStateToProps = (state) => ({
    todos: getVisibleTodos( state.todos, state.visibilityFilter )
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id){
        dispatch(toggleTodo(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
