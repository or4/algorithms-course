import React from 'react';
import { countSplittedArr } from './countLeftSide';

// const arr = [1, 11, 42, 6] as number[];
const arr = [1, 11, 42, 6, 9, 10, 3, 4, 5, 7, 8, 82] as number[];
// const arr = [2, 3, 1, 6, 4, 5, 7] as number[];
// const arr = [1, 11, 42, 9, 7, 8, 82] as number[];
// const arr = [1, 3, 2, 4, 5, 6] as number[];
// const arr = [1, 4, 3, 2, 5, 6] as number[];
// const arr = [ 2, 7, 3, 4] as number[];
// const arr = [11, 5, 42, 6, 3, 4, 34, 1] as number[];

const isDev = false;
let inversionsA = 0;
let inversionsB = 0;
let inversionsC = 0;
let inversionsD = 0;


const merge = (arr1: number[], arr2: number[]): number[] => {
  console.log('MERGE START, arr1', arr1, 'arr2', arr2);
  let i = 0;
  let j = 0;
  const sorted = [] as number[];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      if (typeof arr2[j] !== 'undefined') {
        sorted.push(arr2[j]);
        inversionsA++;
      }
      isDev && console.log('merge, push from arr2, j', j, 'arr2[j]', arr2[j]);
      j++;

    } else if (i === arr2.length) {
      if (typeof arr2[j] !== 'undefined') {
        sorted.push(arr2[j]);
        inversionsB++;
      }
      isDev && console.log('merge, push from arr2, j', j, 'arr2[j]', arr2[j]);
      j++;

    } else {
      if (typeof arr1[i] !== 'undefined') {
        sorted.push(arr1[i]);
        inversionsC++;
      }
      isDev && console.log('merge, push from arr1, i', i, 'arr1[i]', arr1[i]);
      i++;
    }

    // if (i > 4 || j > 4) break;
  }

  console.log('MERGE RESULT, sorted', sorted);
  return sorted;
};

const mergeSort = (arrLoc: number[]): number[] => {
  console.log('mergeSort, arrLoc', arrLoc);
  if (arrLoc.length === 1) {
    isDev && console.log('mergeSort, len=1, arrLoc', arrLoc);
    return arrLoc;
  }

  const medium = Math.floor(arrLoc.length / 2);
  isDev && console.log('mergeSort, len=', arrLoc.length, ', medium', medium);

  // if (arrLoc.length === arr.length) {
  // inversionsD = inversionsD + countSplitted(arrLoc);
  // }

  const arrLeft = mergeSort(arrLoc.slice(0, medium));
  const arrRight = mergeSort(arrLoc.slice(medium));

  inversionsD = inversionsD + countSplittedArr(arrLeft, arrRight);

  const result = merge(arrLeft, arrRight);

  // inversionsD = inversionsD + countSplitted(result);

  return result;
};

type Props = {
};
type State = {
};

export class MergeSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = mergeSort(arr);
    console.log('sortedArray', sortedArray);
    console.log('inversionsA', inversionsA);
    console.log('inversionsB', inversionsB);
    console.log('inversionsC', inversionsC);
    console.log('inversionsD', inversionsD);
    return (
      <div>
        <h3>Array</h3>
        {arr.join(' ')}
        <h3>Sorted</h3>
        {sortedArray.join(' ')}
        <h3>Total Comprasion {inversionsA}</h3>
        <h3>Total Splitted {inversionsD}</h3>
        <h3>Total B {inversionsB}</h3>
        <h3>Total C {inversionsC}</h3>
      </div>
    );
  }
}

