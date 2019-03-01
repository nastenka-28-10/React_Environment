import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import todoApp from '../reducers';
//import { loadState, saveState } from "../localStorage";

const logger = (store) => (next) => {
    if(!console.group){
        return next;
    }
    return (action) => {
        console.group(action.type);
        console.log('%c prev state ', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = next(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue
    };
}

const promise = (store) => (next) => action => {
        if (typeof action.then === 'function') return action.then(next)
        return next(action);
    }

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach( middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    })
}

const configureStore = () => {
    //const persistedState = loadState();
    //const store = createStore(todoApp, persistedState);
    const store = createStore(todoApp);
    const middlewares = [promise];

    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(logger);
    }

    wrapDispatchWithMiddlewares(store, middlewares);

    /*store.subscribe(throttle(() => {
        saveState({
            ...store.getState()
        })
    }), 1000);*/
    return store;
}

export default configureStore;