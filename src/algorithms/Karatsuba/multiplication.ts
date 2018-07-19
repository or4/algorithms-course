import { normalizeNum, addRightNulls, removeNulls } from './utils';
import { add } from './addition';
import { substract } from './subtraction';

const isDevConsole = false;

const multiplySimple = (num1: string, num2: string): string => {
  console.log(`multiplySimple num1=${num1}, num2=${num2}`);

  if (Number(num1) === 0 || Number(num2) === 0) {
    console.log('multiplySimple RESULT return 0');
    return '0';
  }

  const maxLength = num1.length > num2.length ? num1.length : num2.length;
  if (maxLength >= 2) {
    console.log('new cycles');
    const result = multiply(num1, num2);
    console.log(`close cycle, result=${result} multiplySimple RESULT num1=${num1}, num2=${num2}, by complex`);
    return result;
  }

  const result =  String(Number(num1) * Number(num2));
  console.log(`multiplySimple RESULT num1=${num1}, num2=${num2}, by simple result=${result}`);
  return result;
};


export const multiply = (num1: string, num2: string): string => {
  console.log(`multiply num1=${num1}, num2=${num2}`);

  if (Number(num1 || 0) === 0 || Number(num2 || 0) === 0) {
    return '0';
  }

  const maxLength = num1.length > num2.length ? num1.length : num2.length;

  const mid = Math.floor(maxLength / 2);
  console.log('maxLength, mid', maxLength, mid);
  const num1Corrected = normalizeNum(num1, maxLength);
  const num2Corrected = normalizeNum(num2, maxLength);
  isDevConsole && console.log('num1Corrected, num2Corrected', num1Corrected, num2Corrected);
  const a = num1Corrected.slice(0, mid);
  const b = num1Corrected.slice(mid);
  const c = num2Corrected.slice(0, mid);
  const d = num2Corrected.slice(mid);

  isDevConsole && console.log('a', a);
  isDevConsole && console.log('b', b);
  isDevConsole && console.log('c', c);
  isDevConsole && console.log('d', d);
  const step1 = multiplySimple(a, c);
  isDevConsole && console.log('step1', step1);
  const step2 = multiplySimple(b, d);
  isDevConsole && console.log('step2', step2);
  const step3 = multiplySimple(add(a, b), add(c, d));
  isDevConsole && console.log('step3', step3);
  const step4 = substract(substract(step3, step2), step1);
  isDevConsole && console.log('step4', step4);

  const resultP1 = addRightNulls(step1, b.length * 2);
  console.log('resultP1', resultP1);
  const resultP2 = step2;
  console.log('resultP2', resultP2);
  const resultP3 = addRightNulls(step4, b.length);
  // const resultP3 = addRightNulls(step4, maxLength - mid);
  console.log('resultP3', resultP3);


  const result = add(add(resultP1, resultP2), resultP3);

  console.log(`multiply RESULT num1=${num1}, num2=${num2}, result=${result}`);

  return removeNulls(result);
};