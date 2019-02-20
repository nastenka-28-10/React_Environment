import React, { Component } from 'react';

import TodoList from '../../containers/TodoList';
import './App.scss';

const App = ({ match }) => {
    return(
        <div className="wrapper">
            <TodoList filter={ match.params.filter || 'all' }/>
        </div>
    )
}

export default App;