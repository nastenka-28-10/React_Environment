import { combineReducers } from 'redux';

import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../constants/todoActionTypes';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import todo from './todo';

const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed')
});

const todos = combineReducers({
    byId,
    listByFilter,
});

export default todos;

//const getAllTodos = (state) => state.listByFilter.all.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
}

export const getIsFetching = (state, filter) => fromList.getIsFetching(state.listByFilter[filter]);
export const getErrorMessage = (state, filter) => fromList.getErrorMessage(state.listByFilter[filter]);

