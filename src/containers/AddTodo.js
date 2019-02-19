import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo/AddTodo';
import { addTodo } from "../actionCreators/todoActions";

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    onAddTodo(id, text) {
        dispatch(addTodo(id, text))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);
