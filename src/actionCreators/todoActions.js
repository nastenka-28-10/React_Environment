import { v4 } from 'node-uuid';

import { TOGGLE_TODO, ADD_TODO } from '../constants/todoActionTypes';

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