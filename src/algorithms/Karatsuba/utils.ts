
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

export const isFirstBiggerSecondNumber = (num1: string, num2: string): boolean => (num1.length > num2.length) || (Number(num1[0]) > Number(num2[0]));