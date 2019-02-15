import { SET_VISIBILITY_FILTER } from '../constants/visibilityFilterActionTypes';

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}