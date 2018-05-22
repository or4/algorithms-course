/* eslint-disable no-unused-vars */

import createReducer from '../../utils/reducers';
import { getDefaultTask } from '../../utils/tasks';
import {
  LOAD_TASKS_SUCCESS,
  ADD_TASK_SUCCESS,
  SAVE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  LOAD_TASKS_FAIL,
  ADD_TASK_FAIL,
  SAVE_TASK_FAIL,
  DELETE_TASK_FAIL,
} from '../../constants/tasks';

import loadTasksSuccess from './api/loadTasksSuccess';
import addTaskSuccess from './api/addTaskSuccess';
import saveTaskSuccess from './api/saveTaskSuccess';
import deleteTaskSuccess from './api/deleteTaskSuccess';
import requestFail from './api/requestFail';

export const initialState = {
  tasks: [],
  newTask: getDefaultTask(),
  isServerError: false,
};

const tasksReducer = createReducer(initialState, {
  LOAD_TASKS_SUCCESS: loadTasksSuccess,
  ADD_TASK_SUCCESS: addTaskSuccess,
  SAVE_TASK_SUCCESS: saveTaskSuccess,
  DELETE_TASK_SUCCESS: deleteTaskSuccess,

  LOAD_TASKS_FAIL: requestFail,
  ADD_TASK_FAIL: requestFail,
  SAVE_TASK_FAIL: requestFail,
  DELETE_TASK_FAIL: requestFail,
});

export default tasksReducer;
