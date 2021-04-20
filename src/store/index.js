import {
  createStore, compose, applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer,
  composeEnhancers && composeEnhancers()
    ? composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(logger))
    : compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger)),
);

sagaMiddleware.run(rootSaga);

export default store;
