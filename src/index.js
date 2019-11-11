import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { BrowserRouter } from 'react-router-dom';

import store from './store/store';

import App from './components/main/App';


//<Provider store={store}>
// <App />
//</Provider>,

ReactDOM.render(
    <Provider store={store}>
        <h1>Hello all</h1>
    </Provider>,
    document.getElementById('root')
);
