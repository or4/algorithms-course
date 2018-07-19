import { normalizeNum } from './utils';

const substractSimple = (num1: string, num2: string, num3: string): string => {
  if (!num1) return num2;
  if (!num2) return num1;
  return String(Number(num1) - Number(num2) - Number(num3 || 0));
};

export const substract = (num1: string, num2: string): string => {
  const output = [];
  const maxLength = num1.length > num2.length ? num1.length : num2.length;

  let maxNum;
  let minNum;
  let reverse = false;
  if ((num1.length > num2.length) ||
  (Number(num1[0]) > Number(num2[0]))) {
    maxNum = num1;
    minNum = num2;
  } else {
    maxNum = num2;
    minNum = num1;
    reverse = true;
  }

  let num1Corrected = normalizeNum(maxNum, maxLength);
  const num2Corrected = normalizeNum(minNum, maxLength);

  console.log(`num1Corrected = ${num1Corrected}, num2Corrected = ${num2Corrected}`);

  let prev = '';
  for (let i = maxLength - 1; i >= 0; i--) {
    const res = substractSimple(num1Corrected[i], num2Corrected[i], prev);
    if (Number(res) >= 0) {
      output.unshift(res[res.length - 1]);
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
  if (reverse) {
    return '-' + output.join('');
  }
  return output.join('');
};

