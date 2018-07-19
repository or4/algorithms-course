import { reverse } from 'lodash';
import { fillNulls, getMaxLength } from './utils';

const addSimple = (num1: string, num2: string, num3: string): string => {
  return String(Number(num1 || 0) + Number(num2 || 0) + Number(num3 || 0));
};

export const add = (num1: string, num2: string): string => {
  const output = [];
  const maxLength = getMaxLength(num1, num2);

  const num1Filled = fillNulls(num1, maxLength);
  const num2Filled = fillNulls(num2, maxLength);

  const num1Reversed = reverse(num1Filled.split(''));
  const num2Reversed = reverse(num2Filled.split(''));

  let prev = ''; // for addition digit when overflow
  for (let i = 0; i < maxLength; i++) {
    const res = addSimple(num1Reversed[i], num2Reversed[i], prev);
    const resReversed = reverse(res.split(''));
    output.unshift(resReversed[0]);
    prev = resReversed[1];
  }
  if (prev) {
    output.unshift(prev);
  }
  // const reversedAgain = reverse(output);
  return output.join('');
};
