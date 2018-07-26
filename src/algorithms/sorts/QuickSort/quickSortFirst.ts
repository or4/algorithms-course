import { overflowStopper, swap } from './utils';
let countOfRecursiveSteps = 0;


export const quickSortFirst = (arr: string[]): string[] => {
  countOfRecursiveSteps++;
  // console.log('countOfRecursiveSteps', countOfRecursiveSteps);
  if (arr.length <= 1) {
    return arr;
  }

  // console.log('start arr', arr);

  if (overflowStopper.count >= overflowStopper.max) {
    // console.log('Exit by overflow');
    return arr;
  }
  overflowStopper.count++;


  const pivot = arr[0];
  // const pivot = arr[arr.length - 1];
  // console.log('pivot', pivot);
  let i = 0;
  let j = arr.length - 1;

  while (arr[i] !== pivot || arr[j] !== pivot) {
    while (arr[i] < pivot) { i++ }
    while (arr[j] > pivot) { j-- }

    if (arr[i] > arr[j]) {
      swap(arr, arr[i], arr[j]);
    }
    if (arr[i] !== pivot) {
      i++;
    }
    if (arr[j] !== pivot) {
      j--;
    }
  }
  // console.log('swapped arr', arr);

  const arrLeft = arr.slice(0, arr.indexOf(pivot) + 1);
  const arrRight = arr.slice(arr.indexOf(pivot) + 1);
  // console.log('arrLeft', arrLeft);
  // console.log('arrRight', arrRight);

  const resLeft =  arrLeft[0] === pivot ? arrLeft : quickSortFirst(arrLeft);
  const resRight = arrRight[0] === pivot ? arrRight : quickSortFirst(arrRight);
  // console.log('resLeft', resLeft);
  // console.log('resRight', resRight);

  const res = ([] as string[]).concat(resLeft, resRight);
  // console.log('res', res);
  return res;
};

export const quickSortFirstWrapper = (arr: string[]) => {
  const res = quickSortFirst(arr);
  console.log('myFirst: countOfRecursiveSteps', countOfRecursiveSteps);
  return res;
};
