import * as TYPES from '../actions/appActionTypes';

export default function app(state = {}, action) {
    switch (action.type) {
        case TYPES.APP_BUSY:
            return {
                ...state,
                appBusy: action.value
            }
        default:
            return state
    }
}
