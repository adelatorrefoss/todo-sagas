import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import App from './todos/App'
import rootReducer from './todos/combineReducers'
import rootSaga from './todos/TodoList/Todo/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
