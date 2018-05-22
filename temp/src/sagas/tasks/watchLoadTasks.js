import { put, call, fork, take } from 'redux-saga/effects';

import fetchApi from '../../api';
import { LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_FAIL } from '../../constants/tasks';


function* loadTasks(request) {
  try {
    const tasks = yield call(fetchApi, request);
    yield put({ type: LOAD_TASKS_SUCCESS, tasks });
  } catch (e) {
    yield put({ type: LOAD_TASKS_FAIL, error: e });
  }
}

function* watchLoadTasks() {
  while (true) {
    const { payload } = yield take(LOAD_TASKS);
    yield fork(loadTasks, payload.request);
  }
}

export default watchLoadTasks;
