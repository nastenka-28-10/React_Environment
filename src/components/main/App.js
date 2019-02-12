import React, { Component } from 'react';

import CounterList from '../../containers/CounterList';


import './App.scss';

export default class App extends Component {
    printStore(){
        return 1;
    }

    render() {
        return(
            <div className="wrapper">
                <CounterList />
            </div>
        )
    }
}

