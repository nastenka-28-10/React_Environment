import { combineReducers } from 'redux';

import countersState from './countersState';

const counterApp = combineReducers(
    {
        countersState,
    }
);

export default counterApp;