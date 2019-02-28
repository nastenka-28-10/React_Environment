import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import { fetchTodos } from '../api';
import { toggleTodo } from "../actionCreators/todoActions";
import { getVisibleTodos } from "../reducers/index";

fetchTodos('all').then(todo => console.log(todo));

class VisibleTodoList extends Component {
    //componentDidMount вызывается 1 раз => если фильтер изменится =>
    //props.filter поменяются, но данные подтягиваться уже не будут =>
    // нам нужен метод componentDidUpdate(prevProps)
    componentDidMount(){
        fetchTodos(this.props.filter)
            .then(todos => console.log(this.props.filter, todos));
    }

    render(){
        return <TodoList { ...this.props }/>;
    }

    componentDidUpdate(prevProps){
        if(prevProps.filter !== this.props.filter)
            fetchTodos(this.props.filter)
                .then(todos => console.log(this.props.filter, todos));
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return{
        todos: getVisibleTodos( state, filter ),
        filter,
    }
};

/*const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id){
        dispatch(toggleTodo(id))
    }
});*/

//we can don't write mapDispatchToProps and inject callbackName
// and action creator in connect instead mapDispatchToProps sometime
//{ callbackName: action }
VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(VisibleTodoList));

export default VisibleTodoList;