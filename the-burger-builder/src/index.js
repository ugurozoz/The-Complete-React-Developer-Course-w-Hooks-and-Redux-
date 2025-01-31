import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import { watchAuth, watchBurgerBuilder,watchOrder } from './store/sagas/index';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  bbR: burgerBuilderReducer,
  oR: orderReducer,
  aR: authReducer,
});

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk,sagaMiddleWare))
);

sagaMiddleWare.run(watchAuth)
sagaMiddleWare.run(watchBurgerBuilder)
sagaMiddleWare.run(watchOrder)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
