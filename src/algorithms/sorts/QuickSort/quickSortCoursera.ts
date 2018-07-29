import { swap } from './utils';

// import { overflowStopper, swap } from './utils';
// let countOfRecursiveSteps = 0;

const getPivot = (arr: string[], start: number) => {
  return arr[start];
};

const partition = (arr: string[], start: number, end: number) => {
  console.log(`PARTITION START start=${start}, end=${end} now, arr=`, arr);
  const pivot = getPivot(arr, start);
  console.log(`PARTITION PIVOT,`, pivot);
  if (pivot !== arr[start]) {
    swap(arr, pivot, arr[start]);
  }

  let i = start + 1;
  // let j = start + 1;
  let k = start + 1;

  while (k < end) {

    if (Number(arr[k]) < Number(pivot)) {
      // console.log(`this is pre part, i=${i}, j=${j}, k=${k}, arr[k]=${arr[k]}`);

      // console.log(`swap i=${i}, j=${j}, arr[i] = ${arr[i]}, arr[j] = ${arr[j]}, arr[k] = ${arr[k]}`);
      swap(arr, arr[i], arr[k]);

      i++;
      k++;
      // console.log(`now, arr=`, arr);
    }

    if (Number(arr[k]) > Number(pivot)) {
      // console.log(`this is after part, i=${i}, j=${j}, k=${k}, arr[k]=${arr[k]}`);
      // j++;
      k++;
      // console.log(`now, arr=`, arr);
    }
  }

  // console.log(`swap last`);
  swap(arr, arr[i - 1], arr[start]);
  console.log(`PARTITION DONE start=${start}, end=${end} now, arr=`, arr);


  /* ****************************************** */
  return pivot;
};

let blocker = 0;

export const qsort = (arr: string[], start: number, end: number): string[] => {
  if ((end - start) <= 1) {
    return arr;
  }
  if (blocker >= 10) {
    console.log('EXIT BY BLOCKER');
    return arr;
  }
  blocker++;

  // return arr;

  const pivot = partition(arr, start, end);
  const pivotIndex = arr.indexOf(pivot);

  console.log(`start left side, start=${start}, end=${pivotIndex + 1}`);
  qsort(arr, start, pivotIndex + 1);
  console.log(`start left side, start=${start}, end=${pivotIndex + 1}, done`);


  console.log(`start right side, start=${pivotIndex + 1}, end=${end}`);
  qsort(arr, pivotIndex + 1, end);
  console.log(`start right side, start=${pivotIndex + 1}, end=${end}, done`);

  // const arrLeft = pivotIndex === 0 ? [pivot] : arr.slice(0, pivotIndex);
  // const arrRight = arr.slice(pivotIndex, arr.length - 1);


  // const resLeft = qsort(arrLeft);
  // const resRight = qsort(arrRight);

  // partition(arr, start, end);
  // const mid = Math.ceil(arr.length / 2);
  // const arrLeft = arr.slice(0, mid);
  // const arrRight = arr.slice(mid);
  // const resLeft = qsort(arrLeft);
  // const resRight = qsort(arrRight);

  // return ([] as string[]).concat(resLeft, resRight);
  return arr;
};



export const quickSortFirstWrapper = (arr: string[]) => {
  const res = qsort(arr, 0, arr.length);
  // console.log('myFirst: countOfRecursiveSteps', countOfRecursiveSteps);
  console.log('DONE', res);

  return res;
};
