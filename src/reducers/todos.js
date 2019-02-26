import {  combineReducers } from 'redux';

import { TOGGLE_TODO, ADD_TODO } from '../constants/todoActionTypes';
import todo from './todo';

const byId = ( state={}, action ) => {
    switch(action.type){
        case ADD_TODO:
        case TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            };
        default:
            return state;
    }
}

const allIds = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.id];
        default: return state;
    }
}

const todos = combineReducers({
    byId,
    allIds,
});

export default todos;

const getAllTodos = (state) => state.allIds.map(id => state.byId[id]);

const getVisibleTodos = (state, filter = 'all') => {
    const allTodos = getAllTodos(state);
    switch (filter) {
        case 'all':
            return allTodos;
        case 'completed':
            return allTodos.filter( item => item.completed);
        case 'active':
            return allTodos.filter( item => !item.completed);
        default: throw new Error(`Unknown filter ${filter}`);
    }
}

export { byId, allIds, getVisibleTodos };

