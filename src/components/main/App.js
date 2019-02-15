import React, { Component } from 'react';

import TodoList from '../../containers/TodoList';


import './App.scss';

export default class App extends Component {
    printStore(){
        return 1;
    }

    render() {
        return(
            <div className="wrapper">
                <TodoList />
            </div>
        )
    }
}

