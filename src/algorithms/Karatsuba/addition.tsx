import { normalizeNum } from './utils';

const addSimple = (num1: string, num2: string, num3: string): string => {
  if (!num1) return num2;
  if (!num2) return num1;

  return String(Number(num1) + Number(num2) + Number(num3 || 0));
};

export const add = (num1: string, num2: string): string => {
  const output = [];
  const maxLength = num1.length > num2.length ? num1.length : num2.length;

  const num1Corrected = normalizeNum(num1, maxLength);
  const num2Corrected = normalizeNum(num2, maxLength);
  // console.log(`num1Corrected = ${num1Corrected}, num2Corrected = ${num2Corrected}`);

  let prev = '';
  for (let i = maxLength - 1; i >= 0; i--) {
    const res = addSimple(num1Corrected[i], num2Corrected[i], prev);
    output.unshift(res[res.length - 1]);
    prev = res[res.length - 2];
  }
  if (prev) {
    output.unshift(prev);
  }
  return output.join('');
};
