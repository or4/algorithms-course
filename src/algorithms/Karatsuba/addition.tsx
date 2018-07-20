import { reverse } from 'lodash';
import { fillNulls, getMaxLength, existsDigits } from './utils';

const addSimple = (num1: string, num2: string, num3: string): string => {
  return String(Number(num1 || 0) + Number(num2 || 0) + Number(num3 || 0));
};

export const correctArgs = (num: string) => {
  if (num.length && num[0] === '-') {
    const ex = existsDigits(num.split(''), 1);
    if (ex === -1) {
      return '0';
    }
  }
  return num;
};

export const add = (num1: string, num2: string): string => {
  const output = [];
  const maxLength = getMaxLength(num1, num2);

  const num1Corrected = correctArgs(num1);
  const num2Corrected = correctArgs(num2);

  const num1Filled = fillNulls(num1Corrected, maxLength);
  const num2Filled = fillNulls(num2Corrected, maxLength);

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
  return output.join('');
};
