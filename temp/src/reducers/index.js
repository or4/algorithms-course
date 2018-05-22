import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';

//import tasksReducer, { initialState as initialStateTasksReducer } from './tasks';
import { filtersReducer, initialState as initialStateFiltersReducer } from './filters';
//import snackbarReducer, { initialState as initialStateSnackbarReducer } from './snackbar';

export const initialState = {
//  tasksReducer: initialStateTasksReducer,
  filtersReducer: initialStateFiltersReducer,
//  snackbarReducer: initialStateSnackbarReducer,
};

export const reducers = combineReducers({
//  tasksReducer,
  filtersReducer,
//  snackbarReducer,
//  form: formReducer,
});
