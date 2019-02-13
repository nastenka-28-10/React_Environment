import { INCREMENT, DECREMENT, ADD, DELETE } from '../constants/counterActionTypes';

export function onIncrement(index) {
    return {
        type: INCREMENT,
        index,
    }
}

export function onDecrement(index) {
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