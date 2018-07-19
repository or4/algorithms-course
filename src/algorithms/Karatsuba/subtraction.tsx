import { reverse } from 'lodash';
import { normalizeNum, getMaxLength, isFirstBiggerSecondNumber } from './utils';

const substractSimple = (num1: string, num2: string, num3: string): string => {
  if (!num1) return num2;
  if (!num2) return num1;
  return String(Number(num1) - Number(num2) - Number(num3 || 0));
};

const existsDigits = (num1: string[], posFrom: number) => {
  let counter = posFrom;
  while (counter < num1.length) {
    console.log('existsDigits num1[counter]', num1[counter]);
    if (num1[counter]) { return counter }
    counter++;
  }
  return -1;
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

  const num1Normalized = normalizeNum(maxNum, maxLength).split('');
  const num2Normalized = normalizeNum(minNum, maxLength).split('');
  console.log(`num1Normalized = ${num1Normalized}, num2Normalized = ${num2Normalized}`);

  const num1Reversed = reverse(num1Normalized);
  const num2Reversed = reverse(num2Normalized);
  console.log(`num1Reversed = ${num1Reversed}, num2Reversed = ${num2Reversed}`);


  let prev = '';
  for (let i = 0; i < maxLength; i++) {

    const res = substractSimple(num1Reversed[i], num2Reversed[i], prev);
    if (Number(res) >= 0) {
      output.unshift(res[0]);
    } else {
      console.log('res', res);
      const nextIndex = existsDigits(num1Reversed, i + 1);
      if (nextIndex !== -1) {
        console.log('exists');

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

    // console.log('res', res);
    // if (Number(res) >= 0) {
    //   output.unshift(res[res.length - 1]);
    //   prev = '';
    // }
    // else {
    //   output.unshift(res[res.length - 1]);
    //   prev = res[res.length - 2] !== '-' ? res[res.length - 2] : '0';
    // }
  }
  if (prev) {
    output.unshift(prev);
  }
  if (reversed) {
    return '-' + output.join('');
  }
  return output.join('');
};

