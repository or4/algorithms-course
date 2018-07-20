import { fillNulls, addRightNulls, removeNulls } from './utils';
import { add } from './addition';
import { substract } from './subtraction';

const multiplySimple = (num1: string, num2: string): string => {
  if (Number(num1) === 0 || Number(num2) === 0) {
    return '0';
  }

  const maxLength = num1.length > num2.length ? num1.length : num2.length;
  if (maxLength >= 2) {
    const result = multiply(num1, num2);
    return result;
  }

  return String(Number(num1) * Number(num2));
};


export const multiply = (num1: string, num2: string): string => {
  if (Number(num1 || 0) === 0 || Number(num2 || 0) === 0) {
    return '0';
  }

  const maxLength = num1.length > num2.length ? num1.length : num2.length;

  const mid = Math.floor(maxLength / 2);
  const num1Corrected = fillNulls(num1, maxLength);
  const num2Corrected = fillNulls(num2, maxLength);

  const a = num1Corrected.slice(0, mid);
  const b = num1Corrected.slice(mid);
  const c = num2Corrected.slice(0, mid);
  const d = num2Corrected.slice(mid);

  const step1 = multiplySimple(a, c);
  const step2 = multiplySimple(b, d);
  const step3 = multiplySimple(add(a, b), add(c, d));
  const step4 = substract(substract(step3, step2), step1);

  const resultP1 = addRightNulls(step1, b.length * 2);
  const resultP2 = step2;
  const resultP3 = addRightNulls(step4, b.length);

  const result = add(add(resultP1, resultP2), resultP3);
  return removeNulls(result);
};