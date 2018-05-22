import reduce from 'lodash/reduce';
import { getNowFormatted, isValid } from '../../utils/date';

export const getDefaultTask = () => ({
  id: new Date().valueOf(),
  status: 'Not Started',
  priority: 'Normal',
  due: getNowFormatted(),
  isNew: true,
});

export const isOverdue = (task) => {
  const { isDue, due, done } = task;
  const isDone = !!done;

  if (isDue && isDone) {
    return new Date(done).valueOf() > new Date(due).valueOf();
  }

  if (isDue) {
    return new Date().valueOf() > new Date(due).valueOf();
  }
  return false;
};

export const getDue = (isDue, due) => {
  if (isDue) {
    return isValid(due) ? due : getNowFormatted();
  }
  return '';
};

export const getTaskById = (tasks, taskId) => (
  reduce(tasks, (prev, current) => {
    if (prev !== null) {
      return prev;
    }
    if (current.id === taskId) {
      return current;
    }
    return null;
  }, null)
);
