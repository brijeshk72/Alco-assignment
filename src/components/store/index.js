import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../../reducers';
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger'

const config = {
  key: 'root',
  storage,
};
const reducer = persistReducer(config, reducers);

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   reducer,
//   composeEnhancer(applyMiddleware(thunk)),
// );


export const store = createStore(
  reducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save(), logger))
);