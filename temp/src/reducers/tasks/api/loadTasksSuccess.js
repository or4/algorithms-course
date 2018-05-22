import getSortedTasks from '../../../utils/tasks/getSortedTasks';

const loadTasksSuccess = (state, { tasks }) => {
  if (tasks) {
    const sortedTasks = getSortedTasks(tasks);
    return { ...state, tasks: sortedTasks, isServerError: false };
  }
  return state;
};

export default loadTasksSuccess;
