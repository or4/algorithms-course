const push = (arr: number[], value: number) => {
  if (typeof value === 'undefined') return;
  arr.push(value);
};

const merge = (arr1: number[], arr2: number[]): number[] => {
  const sorted = [] as number[];
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

let step = 0;

export const mergeSort = (arr: number[]): number[] => {
  console.log('step', ++step, 'start, arr', arr);
  if (arr.length === 1) {
    return arr;
  }

  const medium = Math.floor(arr.length / 2);

  const arrLeft = mergeSort(arr.slice(0, medium));
  const arrRight = mergeSort(arr.slice(medium));
  const arrBeforeMerge = ([] as number[]).concat(arrLeft).concat(arrRight);
  console.log('for exam', arrBeforeMerge, arrBeforeMerge[6]);
  return merge(arrLeft, arrRight);
};
