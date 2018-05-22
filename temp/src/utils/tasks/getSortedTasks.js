import { parseDate } from '../../utils/date';

const getSortedTasks = (tasks) => {
  const sortedTasks = tasks.sort((previousTask, currentTask) => {
    if (previousTask.done && currentTask.done) {
      return parseDate(currentTask.done) - parseDate(previousTask.done);
    }
    if (currentTask.done) {
      return -1;
    }
    if (previousTask.done) {
      return 1;
    }

    const getValueForPriority = (prevTask, curTask, value) => {
      if (prevTask.priority === value && curTask.priority === value) {
        return curTask.id - prevTask.id;
      }
      if (curTask.priority === value) {
        return 1;
      }
      if (prevTask.priority === value) {
        return -1;
      }
      return null;
    };

    const valueForVeryHigh = getValueForPriority(previousTask, currentTask, 'Very High');
    if (valueForVeryHigh !== null) {
      return valueForVeryHigh;
    }

    const valueForHigh = getValueForPriority(previousTask, currentTask, 'High');
    if (valueForHigh !== null) {
      return valueForHigh;
    }

    return currentTask.id - previousTask.id;
  });

  return sortedTasks;
};

export default getSortedTasks;
