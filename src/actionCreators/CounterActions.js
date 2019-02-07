import { INCREMENT, DECREMENT, ADD, DELETE } from '../constants/CounterActionTypes';

export function incrementCounter(index) {
    return {
        type: INCREMENT,
        index,
    }
}

export function decrementCounter(index) {
    return {
        type: DECREMENT,
        index,
    }
}

export function addCounter() {
    return {
        type: ADD
    }
}

export function deleteCounter(index) {
    return {
        type: DELETE,
        index,
    }
}