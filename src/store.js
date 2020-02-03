import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './modules';

/**
 *  Initial state
 */
const initialState = {};

/**
 *  Middleware
 */
const middleware = [thunk];

/**
 *  Create store w/ state & middleware
 */
export const store = createStore(
  rootReducer,
  initialState,
  process.env.NODE_ENV !== 'production'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

/**
 *  Export dispatch for easier usage
 */
export const dispatch = store.dispatch;
