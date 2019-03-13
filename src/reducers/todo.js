import { ADD_TODO_SUCCESS } from '../constants/todoActionTypes';

const todo = ( state, action ) => {
    switch (action.type) {
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