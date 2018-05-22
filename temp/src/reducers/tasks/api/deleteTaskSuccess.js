import reject from 'lodash/reject';

const deleteTaskSuccess = (state, { task }) => {
  if (task) {
    const tasks = reject(state.tasks, ['id', task.id]);
    return { ...state, tasks, isServerError: false };
  }
  return state;
};

export default deleteTaskSuccess;
