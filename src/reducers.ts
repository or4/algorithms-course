import { combineReducers, Reducer } from 'redoodle';
import { routerReducer } from 'react-router-redux';

export type AppState = {
  routing: any;
};

export const appInitialState: AppState = {
  routing: {},
};

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  routing: routerReducer,
});
