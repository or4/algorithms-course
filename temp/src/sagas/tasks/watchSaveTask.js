import { put, call, fork, take } from 'redux-saga/effects';

import fetchApi from '../../api';
import { SAVE_TASK, SAVE_TASK_SUCCESS, SAVE_TASK_FAIL } from '../../constants/tasks';


function* saveTask(request) {
  try {
    yield call(fetchApi, request);
    yield put({ type: SAVE_TASK_SUCCESS, task: request.data });
  } catch (e) {
    yield put({ type: SAVE_TASK_FAIL, error: e });
  }
}

function* watchSaveTask() {
  while (true) {
    const { payload } = yield take(SAVE_TASK);
    yield fork(saveTask, payload.request);
  }
}

export default watchSaveTask;
