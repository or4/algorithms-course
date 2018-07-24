export const countLeftSide = (arr: string[]): number => {
  if (arr.length === 2) {
    return Number(arr[0] > arr[1]);
  }
  if (arr.length === 1) {
    return 0;
  }
  const midLow = Math.floor(arr.length / 2);
  // console.log('midLow', midLow);
  const midHigh = Math.ceil(arr.length / 2);
  // console.log('midHigh', midHigh);
  return countLeftSide(arr.slice(0, midLow)) + countLeftSide(arr.slice(midHigh, arr.length));
  //return arr.join(',');
};

const getCount = (arr: string[] | number[], from: number, value: string | number) => {
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

export const countSplitted = (arr: string[] | number[]): number => {
  // console.log('.');
  // console.log('.');
  // console.log('.');
  // console.log('countSplitted, arr', arr);
  let i = 0; let arrLow = arr.slice(0, arr.length / 2);
  let j = 0; let arrHigh = arr.slice(arr.length / 2, arr.length);
  let totalCount = 0;
  for (let k = 0; k < arr.length; k++) {
    // console.log('k', k);

    if (i >= arrLow.length) {
      // console.log('countSplitted, arr', arr, 'arrLow', arrLow, 'i', i, 'totalCount', totalCount);
      return totalCount;
    }

    const itemI = arrLow[i];
    const itemJ = arrHigh[j];
    // console.log('itemI', itemI);
    // console.log('itemJ', itemJ);

    if (Number(itemI) > Number(itemJ)) {
      totalCount = totalCount + getCount(arrHigh, j, itemI);
      // console.log(`i=${i}, j=${j}, inc totalCount=${totalCount}`);
      i++;
    } else if (Number(itemI) < Number(itemJ)) {
      i++;
      continue;
    }



    // if (Number(itemI) > Number(itemJ)) {
    //   // console.log(`i=${i}, j=${j}, inc totalCount=${totalCount}`);
    //   totalCount = totalCount + 1;
    //   j++;
    // } else {
    //   i++;
    // }
  }

  // console.log('countSplitted, arr', arr, 'totalCount', totalCount);
  return totalCount;
};


export const countSplittedArr = (arrLow: string[] | number[], arrHigh: string[] | number[]): number => {
  // console.log('.');
  // console.log('.');
  // console.log('.');
  // console.log('countSplitted, arrLow', arrLow, 'arrHigh', arrHigh);
  let i = 0; // let arrLow = arr.slice(0, arr.length / 2);
  let j = 0; // let arrHigh = arr.slice(arr.length / 2, arr.length);
  let totalCount = 0;
  for (let k = 0; k < (arrLow.length + arrHigh.length); k++) {
    // console.log('k', k);

    if (i >= arrLow.length) {
      // console.log('countSplitted, arrLow', arrLow, 'arrHigh', arrHigh, 'arrLow', arrLow, 'i', i, 'totalCount', totalCount);
      return totalCount;
    }

    const itemI = arrLow[i];
    const itemJ = arrHigh[j];
    // console.log('itemI', itemI);
    // console.log('itemJ', itemJ);

    if (Number(itemI) > Number(itemJ)) {
      totalCount = totalCount + getCount(arrHigh, j, itemI);
      // console.log(`i=${i}, j=${j}, inc totalCount=${totalCount}`);
      i++;
    } else if (Number(itemI) < Number(itemJ)) {
      i++;
      continue;
    }



    // if (Number(itemI) > Number(itemJ)) {
    //   // console.log(`i=${i}, j=${j}, inc totalCount=${totalCount}`);
    //   totalCount = totalCount + 1;
    //   j++;
    // } else {
    //   i++;
    // }
  }

  // console.log('countSplitted, arrLow', arrLow, 'arrHigh', arrHigh, 'totalCount', totalCount);
  return totalCount;
};
