import {combineReducers} from 'redux';
import search from './search';
import show from './show';
import episodes from './episodes'

export default combineReducers({
  search,
  show,
  episodes
});
