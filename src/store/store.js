import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
//import throttle from 'lodash/throttle';

import todos from '../reducers/index';
//import { loadState, saveState } from "../localStorage";

/*const logger = (store) => (next) => {
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
    */

/*const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach( middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    })
}*/

const configureStore = () => {
    //const persistedState = loadState();
    //const store = createStore(todoApp, persistedState);
    const middlewares = [promise];

    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger());
    }

    //wrapDispatchWithMiddlewares(store, middlewares);

    /*store.subscribe(throttle(() => {
        saveState({
            ...store.getState()
        })
    }), 1000);*/
    return createStore(
        todos,
        //persistentState,
        applyMiddleware(...middlewares),
    );
}

export default configureStore;