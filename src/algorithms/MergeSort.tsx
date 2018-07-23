import React from 'react';

const arr = [1, 11, 42, 6, 9, 10, 3, 4, 5, 7, 8, 82] as number[];
// const arr = [ 2, 7, 3, 4] as number[];
// const arr = [11, 5, 42, 6, 3, 4, 34, 1] as number[];

const isDev = false;
let totalX = 0;
const merge = (arr1: number[], arr2: number[]): number[] => {
  console.log('merge, arr1', arr1, 'arr2', arr2);
  let i = 0;
  let j = 0;
  const sorted = [] as number[];

  while (i < arr1.length || j < arr2.length) {
    isDev && console.log('merge, i', i, 'j', j);

    if (arr1[i] > arr2[j]) {
      sorted.push(arr2[j]);
      isDev && console.log('merge, push from arr2, j', j, 'arr2[j]', arr2[j]);
      j++;
      totalX++;
    } else if (i === arr2.length) {
      sorted.push(arr2[j]);
      isDev && console.log('merge, push from arr2, j', j, 'arr2[j]', arr2[j]);
      j++;
    } else {
      sorted.push(arr1[i]);
      isDev && console.log('merge, push from arr1, i', i, 'arr1[i]', arr1[i]);
      i++;
    }

    // if (i > 4 || j > 4) break;
  }

  console.log('merge, sorted', sorted);
  return sorted;
};

const mergeSort = (arr: number[]): number[] => {
  isDev && console.log('mergeSort, arr', arr);
  if (arr.length === 1) {
    isDev && console.log('mergeSort, len=1, arr', arr);
    return arr;
  }

  const medium = Math.floor(arr.length / 2);
  isDev && console.log('mergeSort, len=', arr.length, ', medium', medium);

  return merge(mergeSort(arr.slice(0, medium)), mergeSort(arr.slice(medium)));


  // let i = 0;
  // let j = 0;
  // const sorted = [];

  // for (let index = 0; index < n; index++) {
  //   isDev && console.log(index, i, j);

  //   const valArr1 = arr[i];
  //   const valArr2 = arr[j];

  //   if (sorted.indexOf(valArr2) !== -1) {
  //     j += 1;
  //     continue;
  //   }
  //   if (sorted.indexOf(valArr1) !== -1) {
  //     i += 1;
  //     continue;
  //   }

  //   if (valArr1 > valArr2 || typeof valArr1 === 'undefined') {
  //     sorted.push(valArr2);
  //     j += 1;
  //   } else {
  //     sorted.push(valArr1);
  //     i += 1;
  //   }
  // }

  // isDev && console.log(sorted);
  // return sorted;
};

type Props = {
};
type State = {
};

export class MergeSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = mergeSort(arr);
    isDev && console.log('sortedArray', sortedArray);
    return (
      <div>
        <h3>Array</h3>
        {arr.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
        <h3>Sorted</h3>
        {sortedArray.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
        <h3>Total {totalX}</h3>
      </div>
    );
  }
}
