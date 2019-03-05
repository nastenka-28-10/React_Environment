import { combineReducers } from 'redux';

import { REQUEST_TODOS, RECEIVED_TODOS } from '../constants/todoActionTypes';

const createList = (filter) => {
    const ids = (state=[], action) => {
        if (action.filter !== filter) return state;
        switch(action.type){
            case RECEIVED_TODOS:
                return action.response.map(todo => todo.id);
            default: return state;
        }
    }

    const isFetching = (state = false, action) => {
        if (action.filter !== filter) return state;
        switch (action.type){
            case REQUEST_TODOS:
                return true;
            case RECEIVED_TODOS:
                return false;
            default:
                return state;
        }
    }

    return combineReducers({
        ids,
        isFetching
    });
}

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;