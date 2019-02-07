import React, { Component } from 'react';

import Counter from '../../containers/Counter';


import './App.scss';

export default class App extends Component {
    printStore(){
        return 1;
    }

    render() {
        return(
            <Counter />
        )
    }
}

