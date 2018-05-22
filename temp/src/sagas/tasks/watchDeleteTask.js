import { put, call, fork, take } from 'redux-saga/effects';

import fetchApi from '../../api';
import { DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_FAIL } from '../../constants/tasks';


function* deleteTask(request) {
  try {
    yield call(fetchApi, request);
    yield put({ type: DELETE_TASK_SUCCESS, task: request.data });
  } catch (e) {
    yield put({ type: DELETE_TASK_FAIL, error: e });
  }
}

function* watchDeleteTask() {
  while (true) {
    const { payload } = yield take(DELETE_TASK);
    yield fork(deleteTask, payload.request);
  }
}

export default watchDeleteTask;
