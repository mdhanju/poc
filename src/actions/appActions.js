import * as TYPES from './appActionTypes';
import {signInService, resetService} from '../services/fakeHttp';

export function appBusy(value) {
    return {type: TYPES.APP_BUSY, value}
}

export function signIn(params, id) {
    return(dispatch, getState) => {
        dispatch(appBusy(true));
        return signInService().then((response) => {
            dispatch(appBusy(false));
            return response
        });
    }
};

export function reset(params, id) {
    return(dispatch, getState) => {
        dispatch(appBusy(true));
        return resetService().then((response) => {
            dispatch(appBusy(false));
            return response
        });
    }
};
