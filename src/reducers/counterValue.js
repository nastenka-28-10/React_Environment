import { INCREMENT, DECREMENT } from "../constants/CounterActionTypes";

const counterValue = (state=[0], action)=>{
    switch(action.type) {
        case INCREMENT:
            return state[action.index]+1;
        case DECREMENT:
            return list[action.index]-1;
        default: return state;
    }
}

export default counterValue;