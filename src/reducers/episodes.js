import {
    episodesRequest,
    episodesSuccess,
    episodesFailure
} from '../actions/episodesActions';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const episodes = handleAction(
    episodesSuccess,
    (state, action) => action.payload,
    []
);

const error = handleAction(
    episodesFailure,
    (state, action) => action.error,
    null
);

const isFetching = handleActions(
    {
        [episodesRequest]: () => true,
        [episodesSuccess]: () => false,
        [episodesFailure]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [episodesRequest]: () => false,
        [episodesSuccess]: () => true,
        [episodesFailure]: () => true
    },
    false
);

export default combineReducers({
    episodes,
    error,
    isFetching,
    isFetched
});


