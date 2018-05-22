import { fork } from 'redux-saga/effects';

import watchLoadTasks from './watchLoadTasks';
import watchAddTask from './watchAddTask';
import watchDeleteTask from './watchDeleteTask';
import watchSaveTask from './watchSaveTask';

const taskSagas = [
  fork(watchLoadTasks),
  fork(watchAddTask),
  fork(watchDeleteTask),
  fork(watchSaveTask),
];

export default taskSagas;
