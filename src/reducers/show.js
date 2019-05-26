import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions/showActions';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const shows = handleAction(
    showSuccess,
    (state, action) => action.payload,
    []
);

const error = handleAction(
    showFailure,
    (state, action) => action.error,
    null
);

const isFetching = handleActions(
    {
        [showRequest]: () => true,
        [showSuccess]: () => false,
        [showFailure]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [showRequest]: () => false,
        [showSuccess]: () => true,
        [showFailure]: () => true
    },
    false
);

export default combineReducers({
    shows,
    error,
    isFetching,
    isFetched
});

export const getShows = state => state.shows;
export const getError = state => state.error;
export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;

