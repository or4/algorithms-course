import map from 'lodash/map';
import getSortedTasks from '../../../utils/tasks/getSortedTasks';

const saveTaskSuccess = (state, { task }) => {
  if (task) {
    const tasks = map(state.tasks, taskBeforeSave => (
      (taskBeforeSave.id === task.id) ? { ...task } : taskBeforeSave
    ));
    const sortedTasks = getSortedTasks(tasks);
    return { ...state, tasks: sortedTasks };
  }
  return state;
};

export default saveTaskSuccess;
