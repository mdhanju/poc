import * as TYPES from '../actions/appActionTypes';

export default function search(state = {}, action) {
    switch (action.type) {
        case TYPES.SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.value
            }
        case TYPES.CREATE_24_BY_7:
            return {
                ...state,
                twentyFour: action.value
            }
        default:
            return state
    }
}
