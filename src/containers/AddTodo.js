import React from 'react';
import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo/AddTodo';
import { addTodo } from "../actionCreators/index";

const mapDispatchToProps = (dispatch) => ({
    onAddTodo(text) {
        dispatch(addTodo(text))
    }
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
