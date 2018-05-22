//import { StoreEnhancer } from 'redoodle'
/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, compose, Action, Middleware, MiddlewareAPI, Dispatch } from 'redux';
/* eslint-enable no-unused-vars */
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, AppState, appInitialState } from './reducers';


export const history = createHistory();
const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const actionToPlainObject: Middleware =
  (api: MiddlewareAPI<void>) =>
    (next: Dispatch<void>) =>
      <A extends Action>(action: A) => {
        console.log(action);
        return next(Object.assign({}, action));
      };

const enhancer = compose(
  applyMiddleware(sagaMiddleware, middleware, actionToPlainObject),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore<AppState>(rootReducer, appInitialState, enhancer as any);

export default store;
