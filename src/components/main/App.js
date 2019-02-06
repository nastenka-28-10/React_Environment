import React, { Component } from 'react';

import './App.scss';

export default class App extends Component {
    printStore(){
        return 1;
    }

    render() {
        return(
            <div>
                <h4>{ this.printStore() }</h4>
            </div>
        )
    }
}

