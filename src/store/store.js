import { createStore } from 'redux';

import reactApp from '../reducers';

const store = createStore(reactApp);

export default store;