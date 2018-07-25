export type PivotType = 'first' | 'last' | 'mediana';

const getMediana = (arr: string[]): string => {
  console.log('getMediana arr', arr);
  if (!arr || arr.length === 0) {
    throw new Error('getMediana, arr is empty');
  }
  if (arr.length === 1) {
    return arr[0];
  }
  const mid = Math.floor(arr.length / 2);
  console.log('getMediana arr[mid]', arr[mid]);
  return arr[mid];
};

const getPivot = (pivotType: PivotType, arr: string[]): string => {
  if (!arr || arr.length === 0) {
    throw new Error('getPivot, arr is empty');
  }
  if (arr.length === 1) {
    return arr[0];
  }

  if (pivotType === 'first') {
    return arr[0];
  } else if (pivotType === 'last') {
    return arr[arr.length - 1];
  } else if (pivotType === 'mediana') {
    return getMediana(arr);
  }

  throw new Error(`Cannot define pivotType, pivotType is ${pivotType}`);
};

const swap = (arr: string[], item1: string, item2: string) => {
  const index1 = arr.indexOf(item1);
  const index2 = arr.indexOf(item2);
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  console.log('swap arr[index1] arr[index2]', arr[index1], arr[index2]);
  return arr;
};

export const quickSort = (pivotType: PivotType, arr: string[]): string[] => {
  // const sorted = [...arr];
  // let counterSwap = 0;
  // let counterCycles = 0;
  console.log('start');

  if (arr.length <= 1) {
    return arr;
  }


  const pivot = getPivot(pivotType, arr);
  let i = 0;
  let j = arr.length - 1;

  while (arr[i] !== pivot && arr[j] !== pivot) {
    console.log('cycle start arr', arr);
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    console.log('cycle process arr[i]', arr[i], 'arr[j]', arr[j]);

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
  console.log('cycle all swapped arr', arr);

  const arrLeft = arr.slice(0, arr.indexOf(pivot));
  const arrRigth = arr.slice(arr.indexOf(pivot));


  const res = ([] as string[]).concat(quickSort(pivotType, arrLeft), quickSort(pivotType, arrRigth));

  console.log('done', res);

  return res;

  // console.log('arr.length', arr.length);
  // console.log('counterSwap', counterSwap);
  // console.log('counterCycles', counterCycles);

  // return sorted;
};
