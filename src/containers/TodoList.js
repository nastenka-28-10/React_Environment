import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import { toggleTodo } from "../actionCreators/todoActions";

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter( item => item.completed)
        case 'active':
            return todos.filter( item => !item.completed)
    }
}

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos( state.todos, ownProps.filter )
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
