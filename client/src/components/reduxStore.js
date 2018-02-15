import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers.js'

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer, window.__INITIAL_STATE__, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
