import { ADD, DELETE } from "../constants/CounterActionTypes";

const countersNumber = (state=[0], action)=>{
    switch(action.type) {
        case ADD:
            return [...state, 0];
        case DELETE:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ];
        default: return state;
    }
}

export default countersNumber;