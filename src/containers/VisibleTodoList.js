import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import FetchError from '../components/FetchError/FetchError';
import { toggleTodo, fetchTodos } from "../actionCreators";
import { getVisibleTodos, getErrorMessage, getIsFetching } from "../reducers";

class VisibleTodoList extends Component {
    //componentDidMount вызывается 1 раз => если фильтер изменится =>
    //props.filter поменяются, но данные подтягиваться уже не будут =>
    // нам нужен метод componentDidUpdate(prevProps)
    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter);
    }

    render(){
        const { toggleTodo, todos, isFetching, errorMessage } = this.props;
        if( isFetching && !todos.length ){
            return <p>Loading...</p>
        }

        if( errorMessage && !todos.length ){
            return <FetchError message={ errorMessage } onRetry = { () => this.fetchData() }/>
        }

        return <TodoList todos ={ todos } onTodoClick={ toggleTodo }/>;
    }

    componentDidUpdate(prevProps){
        if(prevProps.filter !== this.props.filter)
            this.fetchData();
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return{
        todos: getVisibleTodos( state, filter ),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
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
    {
        onTodoClick: toggleTodo,
        fetchTodos,
    }
)(VisibleTodoList));

export default VisibleTodoList;