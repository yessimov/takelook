import {
    episodesRequest,
    episodesSuccess,
    episodesFailure
} from '../actions/episodesActions';
import { episodes } from '../api';

export default store => next => action => {
    if(action.type === episodesRequest.toString()) {
        episodes(action.payload)
            .then(films => {
                store.dispatch(episodesSuccess(films))
            })
            .catch(error => {
                store.dispatch(episodesFailure(error))
            })
    }
    return next(action)
}