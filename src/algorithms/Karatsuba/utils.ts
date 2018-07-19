
export const normalizeNum = (num: string, len: number) => {
  let numCorrected = num;
  while (numCorrected.length !== len) {
    numCorrected = '0' + numCorrected;
  }
  return numCorrected;
};

export const addRightNulls = (num: string, count: number) => {
  let index = count;
  let numCorrected = num;
  while (index > 0) {
    numCorrected = numCorrected + '0';
    index--;
  }
  return numCorrected;
};

export const getMaxLength = (num1: string, num2: string) => (num1.length > num2.length ? num1.length : num2.length);

export const isFirstBiggerSecondNumber = (num1: string, num2: string): boolean => {
  if ((num1.length > num2.length) || (Number(num1[0]) > Number(num2[0]))) {
    return true;
  }

  let index = 0;
  if ((num1.length === num2.length) && (Number(num1[0]) === Number(num2[0]))) {
    while (index < num1.length) {
      if (num1[index] !== num2[index]) {
        return Number(num1[index]) > Number(num2[index]);
      }
      index++;
    }
  }

  return false;
};

export const removeNulls = (num: string) => {
  console.log('removeNulls num', num);
  let index = 0;
  while (index < num.length) {
    if (num[index] !== '0') {
      break;
    }
    index++;
  }
  console.log('removeNulls index', index);
  return num.substring(index);
};