import { createStore } from 'redux';

import todoApp from '../reducers';

const persistedState = {
    todos: [{
        id: '0',
        text: 'Welcome back!',
        completed: false
    }],
};

const store = createStore(todoApp, persistedState);

export default store;