import { ADD, DELETE, INCREMENT, DECREMENT  } from "../constants/counterActionTypes";

const countersState = (state=[0], action)=>{
    switch(action.type) {
        case ADD:
            return [...state, 0];
        case DELETE:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ];
        case INCREMENT:
            return [
                ...state.slice(0, action.index),
                state[action.index]+1,
                ...state.slice(action.index+1)
            ];
        case DECREMENT:
            return [
                ...state.slice(0, action.index),
                state[action.index]-1,
                ...state.slice(action.index+1)
            ];
        default: return state;
    }
}

export default countersState;