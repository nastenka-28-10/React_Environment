import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './main/App';

const Root = ({ store }) => (
    <Provider store={ store }>
        <App/>
    </Provider>
);

export default Root;
