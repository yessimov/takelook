import { createActions } from 'redux-actions';

export const { episodesRequest, episodesSuccess, episodesFailure } = createActions({
    EPISODES_REQUEST: undefined,
    EPISODES_SUCCESS: undefined,
    EPISODES_FAILURE: undefined
})  