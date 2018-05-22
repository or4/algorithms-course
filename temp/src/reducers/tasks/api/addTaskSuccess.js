import getSortedTasks from '../../../utils/tasks/getSortedTasks';

const addTaskSuccess = (state, { task }) => {
  if (task) {
    const tasks = state.tasks.concat(task);
    const sortedTasks = getSortedTasks(tasks);
    return { ...state, tasks: sortedTasks, isServerError: false };
  }
  return state;
};

export default addTaskSuccess;
