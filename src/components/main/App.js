import React, { Component } from 'react';

import VisibleTodoList from '../../containers/VisibleTodoList';
import AddTodo from '../../containers/AddTodo';
import Filter from '../Filter/Filter';
import './App.scss';

const App = () => {
    return(
        <div className="wrapper">
            <AddTodo/>
            <Filter/>
            <VisibleTodoList/>
        </div>
    )
}

export default App;