import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions/showActions';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const show = handleAction(
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
    show,
    error,
    isFetching,
    isFetched
});



