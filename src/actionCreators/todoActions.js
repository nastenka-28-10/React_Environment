import { TOGGLE_TODO, ADD_TODO } from '../constants/todoActionTypes';

let nextTodoId=0;
export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text,
    }
}