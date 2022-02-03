const getCount = (arr: string[], from: number, value: string) => {
  let acc = 0;
  for (let i = from; i < arr.length; i++) {
    if (Number(arr[i]) < Number(value)) { acc++ }
    else { return acc }
  }
  return acc;
};

export const countSplittedArr = (arrLow: string[], arrHigh: string[]): number => {
  let inversions = 0;
  let i = 0;
  let j = 0;

  for (let k = 0; k < (arrLow.length + arrHigh.length); k++) {
    if (i >= arrLow.length) {
      return inversions;
    }

    if (Number(arrLow[i]) > Number(arrHigh[j])) {
      inversions = inversions + getCount(arrHigh, j, arrLow[i]);
      i++;
    }
    else { i++ }
  }

  return inversions;
};


export const countSplitted = (arr: string[]): number => {
  let arrLow = arr.slice(0, arr.length / 2);
  let arrHigh = arr.slice(arr.length / 2, arr.length);

  return countSplittedArr(arrLow, arrHigh);
};
