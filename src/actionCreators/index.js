import { v4 } from 'node-uuid';

import { TOGGLE_TODO, ADD_TODO, RECEIVED_TODOS } from '../constants/todoActionTypes';
import * as api from '../api';

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: v4(),
        text,
    }
};

const receiveTodos = (filter, response) => {
    return {
        type: RECEIVED_TODOS,
        filter,
        response,
    }
}

export const fetchTodos = (filter) =>
    api.fetchTodos(filter).then(
        response => receiveTodos(filter, response)
    );