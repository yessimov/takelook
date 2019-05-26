import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import searchMiddleware from './middlewares/searchMiddleware';
import showMiddleware from './middlewares/showMiddleware';
import episodesMiddleware from './middlewares/episodesMiddleware';

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(searchMiddleware, showMiddleware, episodesMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
