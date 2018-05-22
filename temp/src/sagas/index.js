import { all } from 'redux-saga/effects';

// import tasks from './tasks';

function* rootSaga() {
  yield all([
    // ...tasks,
  ]);
}

export default rootSaga;
