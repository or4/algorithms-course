import { swap } from './utils';

// import { overflowStopper, swap } from './utils';
let countOfRecursiveSteps = 0;

const getPivot = (arr: string[]) => {
  return arr[0];
};

const partition = (arr: string[]) => {
  const pivot = getPivot(arr);
  if (pivot !== arr[0]) {
    swap(arr, pivot, arr[0]);
  }

  let i = 1;
  let j = 2;
  if (arr[i] > arr[j]) {
    swap(arr, arr[i], arr[j]);
  }
};


export const quickSortFirst = (arr: string[]): string[] => {
  partition(arr);
  return arr;
};



export const quickSortFirstWrapper = (arr: string[]) => {
  const res = quickSortFirst(arr);
  console.log('myFirst: countOfRecursiveSteps', countOfRecursiveSteps);
  return res;
};
