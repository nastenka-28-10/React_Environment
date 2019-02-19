import { TOGGLE_TODO, ADD_TODO } from '../constants/todoActionTypes';

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

export const addTodo = (id, text) => {
    return {
        type: ADD_TODO,
        id,
        text,
    }
};