import { swap } from './utils';
import { getMediana } from './getMediana';

const statistic = {
  countSwaps: 0,
  countComprasions: 0,
};

const getPivot = (arr: string[], start: number, end: number) => {
  // return arr[start];
  // return arr[end - 1];
  const mediana = getMediana(arr, start, end - 1);
  // console.log(`start=${start}, startItem=${arr[start]}, end=${end - 1}, endItem=${arr[end - 1]} mediana=${mediana}, arr=`, arr);
  return mediana;
};

const partition = (arr: string[], start: number, end: number) => {
  const pivot = getPivot(arr, start, end);

  if (pivot !== arr[start]) {
    statistic.countSwaps++;
    swap(arr, pivot, arr[start]);
  }

  let i = start + 1;
  let k = start + 1;

  while (k < end) {
    if (Number(arr[k]) < Number(pivot)) {
      statistic.countSwaps++;
      swap(arr, arr[i], arr[k]);
      i++;
    }
    k++;
  }

  if (arr[i - 1] !== arr[start]) {
    statistic.countSwaps++;
    swap(arr, arr[i - 1], arr[start]);
  }

  return pivot;
};

export const sort = (arr: string[], start: number, end: number): string[] => {
  if ((end - start) <= 1) {
    return arr;
  }
  // console.log('.');
  // console.log('.');
  // console.log('.');
  statistic.countComprasions += end - start - 1;
  // console.log(`left=${arr[start]}, right=${arr[end - 1]}, count=${end - start - 1}`);

  const pivot = partition(arr, start, end);
  const pivotIndex = arr.indexOf(pivot);

  sort(arr, start, pivotIndex);
  sort(arr, pivotIndex + 1, end);

  return arr;
};

export const quickSort = (arr: string[]) => {
  statistic.countComprasions = 0;
  statistic.countSwaps = 0;

  const sortedArray = sort(arr, 0, arr.length);

  console.log('qsort coursera: countSwaps', statistic.countSwaps);
  console.log('qsort coursera: countComprasions', statistic.countComprasions);

  return sortedArray;
};
