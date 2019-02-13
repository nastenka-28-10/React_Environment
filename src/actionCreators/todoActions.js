import { TOGGLE_TODO, ADD_TODO } from '../constants/todoActionTypes';

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

export function addTodo(id, text) {
    return {
        type: ADD_TODO,
        id,
        text,
    }
}