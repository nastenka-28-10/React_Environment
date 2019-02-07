import { INCREMENT, DECREMENT } from '../constants/CounterActionTypes';

export function incrementCounter() {
    return {
        type: INCREMENT
    }
}

export function decrementCounter() {
    return {
        type: DECREMENT
    }
}