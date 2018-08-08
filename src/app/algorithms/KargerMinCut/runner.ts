import * as R from 'ramda';
import { getMinCut } from './kargerMinCut';
const countTimes = 1000;

const covertToArray = R.pipe(
  R.toPairs,
  R.map(R.join('-')),
  R.join(', '),
);

export const run = (data: string[][], debugText = '') => {
  const output = {};
  console.log('getMinCut start');

  for (let i = 0; i < countTimes; i++) {
    const value = getMinCut(data);

    if (typeof output[value] === 'undefined') {
      output[value] = 1;
    } else {
      output[value] = output[value] + 1;
    }
  }

  console.log(debugText, 'output', output);
  console.log(debugText, covertToArray(output));


  const result = R.pipe(
    R.keys,
    R.map(Number),
    R.reduce(R.min, Infinity)
  )(output);

  console.log(debugText, 'result', result);

  return result;
};