export const countLeftSide = (arr: string[]): number => {
  if (arr.length === 2) {
    return Number(arr[0] > arr[1]);
  }
  if (arr.length === 1) {
    return 0;
  }
  const midLow = Math.floor(arr.length / 2);
  console.log('midLow', midLow);
  const midHigh = Math.ceil(arr.length / 2);
  console.log('midHigh', midHigh);
  return countLeftSide(arr.slice(0, midLow)) + countLeftSide(arr.slice(midHigh, arr.length));
  //return arr.join(',');
};

const getCount = (arr: string[], from: number, value: string) => {
  let acc = 0;
  for (let i = from; i < arr.length; i++) {
    if (Number(arr[i]) < Number(value)) {
      acc++;
    } else {
      return acc;
    }
  }
  return acc;
};

export const countSplitted = (arr: string[]): number => {
  let i = 0; let arrLow = arr.slice(0, arr.length / 2);
  let j = 0; let arrHigh = arr.slice(arr.length / 2, arr.length);
  let totalCount = 0;
  for (let k = 0; k < arr.length; k++) {

    if (i >= arrLow.length) { return totalCount }

    console.log('.');
    const itemI = arrLow[i];
    const itemJ = arrHigh[j];

    if (Number(itemI) > Number(itemJ)) {
      totalCount = totalCount + getCount(arrHigh, j, itemI);
      console.log(`i=${i}, j=${j}, inc totalCount=${totalCount}`);
      i++;
    } else if (Number(itemI) < Number(itemJ)) {
      i++;
      continue;
    }



    // if (Number(itemI) > Number(itemJ)) {
    //   console.log(`i=${i}, j=${j}, inc totalCount=${totalCount}`);
    //   totalCount = totalCount + 1;
    //   j++;
    // } else {
    //   i++;
    // }
  }

  return totalCount;
};