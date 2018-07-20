import { reverse } from 'lodash';
import { fillNulls, getMaxLength, isFirstBiggerSecondNumber, existsDigits } from './utils';

const substractSimple = (num1: string, num2: string, num3: string): string => {
  if (!num1) return num2;
  if (!num2) return num1;
  return String(Number(num1) - Number(num2) - Number(num3 || 0));
};


export const substract = (num1: string, num2: string): string => {
  const output = [];
  const maxLength = getMaxLength(num1, num2);

  let maxNum;
  let minNum;
  let reversed = false;

  if (isFirstBiggerSecondNumber(num1, num2)) {
    maxNum = num1;
    minNum = num2;
  } else {
    maxNum = num2;
    minNum = num1;
    reversed = true;
  }

  const num1Normalized = fillNulls(maxNum, maxLength).split('');
  const num2Normalized = fillNulls(minNum, maxLength).split('');

  const num1Reversed = reverse(num1Normalized);
  const num2Reversed = reverse(num2Normalized);

  let prev = '';
  for (let i = 0; i < maxLength; i++) {

    const res = substractSimple(num1Reversed[i], num2Reversed[i], prev);
    if (Number(res) >= 0) {
      output.unshift(res[0]);
    } else {
      const nextIndex = existsDigits(num1Reversed, i + 1);
      if (nextIndex !== -1) {
        const res1 = substractSimple(String(10 + Number(num1Reversed[i])), num2Reversed[i], prev);
        output.unshift(res1[0]);
        num1Reversed[nextIndex] = String(Number(num1Reversed[nextIndex]) - 1);
        let tmpI = i + 1;
        while (tmpI < nextIndex) {
          num1Reversed[tmpI] = '9';
          tmpI++;
        }

      } else {
        console.log('doenst exists');
      }
    }

  }
  if (prev) {
    output.unshift(prev);
  }

  return (reversed ? '-' : '') + output.join('');
};

