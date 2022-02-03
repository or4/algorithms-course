import { countSplittedArr } from './countInversions';

let inversions = 0;

const push = (arr: string[], value: string) => {
  if (typeof value === 'undefined') return;
  arr.push(value);
};

const merge = (arr1: string[], arr2: string[]): string[] => {
  const sorted = [] as string[];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (Number(arr1[i]) > Number(arr2[j]) || i === arr2.length) {
      push(sorted, arr2[j]);
      j++;

    } else {
      push(sorted, arr1[i]);
      i++;
    }
  }

  return sorted;
};

const modifiedMergeSort = (arr: string[]): string[] => {
  if (arr.length === 1) {
    return arr;
  }

  const medium = Math.floor(arr.length / 2);

  const arrLeft = modifiedMergeSort(arr.slice(0, medium));
  const arrRight = modifiedMergeSort(arr.slice(medium));

  inversions = inversions + countSplittedArr(arrLeft, arrRight);

  return merge(arrLeft, arrRight);
};

export const getInversionsCount = (arr: string[]): string => {
  inversions = 0;
  const filteredArr = arr.filter(
    item =>
      typeof item !== 'undefined' && item.trim() !== ''
  );

  modifiedMergeSort(filteredArr);

  return String(inversions);
};

