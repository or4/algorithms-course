/* eslint-disable no-unused-vars */

import createReducer from '../../utils/reducers';

import { HIDE_SNACKBAR } from '../../constants/snackbar';
import {
  ADD_TASK_SUCCESS,
  SAVE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  LOAD_TASKS_FAIL,
  ADD_TASK_FAIL,
  SAVE_TASK_FAIL,
  DELETE_TASK_FAIL,
} from '../../constants/tasks';

import hideSnackbar from './hideSnackbar';
import addTaskSuccess from './tasks/addTaskSuccess';
import saveTaskSuccess from './tasks/saveTaskSuccess';
import deleteTaskSuccess from './tasks/deleteTaskSuccess';

import loadTasksFail from './tasks/loadTasksFail';
import addTaskFail from './tasks/addTaskFail';
import saveTaskFail from './tasks/saveTaskFail';
import deleteTaskFail from './tasks/deleteTaskFail';

export const initialState = {
  state: false,
  message: '',
};

const snackbarReducer = createReducer(initialState, {
  HIDE_SNACKBAR: hideSnackbar,
  ADD_TASK_SUCCESS: addTaskSuccess,
  SAVE_TASK_SUCCESS: saveTaskSuccess,
  DELETE_TASK_SUCCESS: deleteTaskSuccess,

  LOAD_TASKS_FAIL: loadTasksFail,
  ADD_TASK_FAIL: addTaskFail,
  SAVE_TASK_FAIL: saveTaskFail,
  DELETE_TASK_FAIL: deleteTaskFail,
});

export default snackbarReducer;
