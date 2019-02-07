import { combineReducers } from 'redux';

import counterValue from './counterValue';
import countersNumber from './countersNumber';

const counterApp = combineReducers(
    {
        counterValue,
        countersNumber,
    }
);

export default counterApp;