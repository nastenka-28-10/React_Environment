import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { BrowserRouter } from 'react-router-dom';

import store from './store/store';

import App from './components/main/App';

class Example1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    componentDidMount() {
        document.title = `Вы нажали ${this.state.count} раз`;
    }

    componentDidUpdate() {
        document.title = `Вы нажали ${this.state.count} раз`;
    }

    render(){
        return(
          <div style={{border: "1px solid red"}} onClick={() => {this.setState(({count})=>({count: ++count}))}}>
              {this.state.count}
          </div>
        );
    }
}

function Example2() {
    let [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = count;
    });
    return (
        <div style={{border: "1px solid red"}} onClick={() => setCount(++count)}>
            {count}
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <Example2/>
    </Provider>,
    document.getElementById('root')
);
