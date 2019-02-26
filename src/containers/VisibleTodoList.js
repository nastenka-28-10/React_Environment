import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import { toggleTodo } from "../actionCreators/todoActions";
import { getVisibleTodos } from "../reducers/index";

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos( state, match.params.filter )
});

/*const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id){
        dispatch(toggleTodo(id))
    }
});*/


//we can don't write mapDispatchToProps and inject callbackName
// and action creator in connect instead mapDispatchToProps sometime
//{ callbackName: action }
const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;