const deleteTaskSuccess = (state, { task }) => ({
  state: true,
  message: `Task '${task.name}' was deleted`,
});

export default deleteTaskSuccess;
