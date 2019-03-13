import { TOGGLE_TODO, ADD_TODO_SUCCESS } from '../constants/todoActionTypes';

const todo = ( state, action ) => {
    switch (action.type) {
        case TOGGLE_TODO:
            if(state.id !== action.id)
                return state;
            else {
                return {
                    ...state,
                    completed: !state.completed
                };
            }
        case ADD_TODO_SUCCESS:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        default: return state;
    }
}

export default todo;