const saveTaskSuccess = (state, { task }) => ({
  state: true,
  message: `Task '${task.name}' was saved`,
});

export default saveTaskSuccess;
