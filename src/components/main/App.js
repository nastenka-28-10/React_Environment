import React, { Component } from 'react';

import TodoList from '../../containers/TodoList';
import './App.scss';

export default class App extends Component {

    render() {
        return(
            <div className="wrapper">
                <TodoList />
            </div>
        )
    }
}

