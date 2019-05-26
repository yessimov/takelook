import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions/showActions';
import { show } from '../api';

export default store => next => action => {
    if(action.type === showRequest.toString()) {
        show(action.payload)
            .then(film => {
                store.dispatch(showSuccess(film))
            })
            .catch(error => {
                store.dispatch(showFailure(error))
            })
    }
    return next(action)
}