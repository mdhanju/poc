import {appBusy} from './appActions';
import {searchNow, createTwentyFourSevenService, updateCreateSibelService} from '../services/fakeHttp';
import * as TYPES from './appActionTypes';

export function updateSearchResult(value) {
    return {type: TYPES.SEARCH_RESULTS, value}
}

export function updateCreate24By7(value) {
    return {type: TYPES.CREATE_24_BY_7, value}
}

export function updateCreateSibel(value) {
    return {type: TYPES.CREATE_SIBEL, value}
}

export function searchItems(params, id) {
    return(dispatch, getState) => {
        dispatch(appBusy(true));
        dispatch(updateSearchResult());
        return searchNow().then((response) => {
            dispatch(appBusy(false));
            dispatch(updateSearchResult(response));
            return response
        });
    }
};

export function createTwentyFourSeven(params, id) {
    return(dispatch, getState) => {
        dispatch(appBusy(true));
        dispatch(updateSearchResult());
        return createTwentyFourSevenService().then((response) => {
            dispatch(appBusy(false));
            dispatch(updateCreate24By7(response));
            return response
        });
    }
};

export function createSibelSeven(params, id) {
    return(dispatch, getState) => {
        dispatch(appBusy(true));
        dispatch(updateSearchResult());
        return updateCreateSibelService().then((response) => {
            dispatch(appBusy(false));
            dispatch(updateCreateSibel(response));
            return response
        });
    }
};
