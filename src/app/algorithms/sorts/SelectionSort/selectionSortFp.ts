import * as R from 'ramda';

const getMinValue = (arr: number[]) => {
  return R.reduce(R.min, arr[0], arr);
};

export const selectionSort = (arr: number[]) => {
  const sortedArray = [] as any;
  let inArray = [...arr];

  while (inArray.length) {
    const minValue = getMinValue(inArray);

    inArray.splice(inArray.indexOf(Number(minValue)), 1);

    sortedArray.push(minValue);
  }

  return sortedArray;
};
