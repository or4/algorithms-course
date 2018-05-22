const addTaskSuccess = (state, { task }) => ({
  state: true,
  message: `Task '${task.name}' was added`,
});

export default addTaskSuccess;
