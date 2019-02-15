import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import { addTodo, toggleTodo } from "../actionCreators/todoActions";

const mapStateToProps = (state) => {
    return {
        todos:  state.todos,
        visibilityFilter: state.visibilityFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (id, text) => {
            dispatch(addTodo(id, text))
        },
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
