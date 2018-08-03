const statistic = {
  countSwaps: 0,
  countComprasions: 0,
};

const insert = (arr: string[], pos: number, value: string) => {
  let i = pos - 1;
  while (i >= 0 && Number(arr[i]) > Number(value)) {
    arr[i + 1] = arr[i];
    statistic.countComprasions++;
    statistic.countSwaps++;
    i--;
  }
  arr[i + 1] = value;
  statistic.countSwaps++;
};

const sort = (arr: string[]): string[] => {
  for (let i = 1; i < arr.length; i++) {
    insert(arr, i, arr[i]);
  }
  return arr;
};



export const insertionSort = (arr: string[]) => {
  statistic.countComprasions = 0;
  statistic.countSwaps = 0;

  const sortedArray = sort(arr);

  console.log('insertion sort: countSwaps', statistic.countSwaps);
  console.log('insertion sort: countComprasions', statistic.countComprasions);

  return sortedArray;
};
