import { TOGGLE_TODO, ADD_TODO } from '../constants/todoActionTypes';

const todo = ( state, action ) => {
    switch (action.type) {
        case TOGGLE_TODO:
            if(state.id!==action.id)
                return state;
            else {
                return {
                    ...state,
                    completed: !state.completed
                };
            }
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        default: return state;
    }
}

export default function todos( state=[], action ) {
    switch(action.type){
        case TOGGLE_TODO:
            return state.map( td => todo(td, action) );
        case ADD_TODO:
            return [
                ...state,
                todo(null, action)
            ];
        default: return state;
    }
}

export function getVisibleTodos(state, filter = 'all') {
    switch (filter) {
        case 'all':
            return state;
        case 'completed':
            return state.filter( item => item.completed)
        case 'active':
            return state.filter( item => !item.completed)
        default: throw new Error(`Unknown filter ${filter}`)
    }
}

