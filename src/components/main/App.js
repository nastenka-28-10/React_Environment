import React, { Component } from 'react';

import TodoList from '../../containers/VisibleTodoList';
import './App.scss';

const App = () => {
    return(
        <div className="wrapper">
            <TodoList/>
        </div>
    )
}

export default App;