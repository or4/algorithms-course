import React from 'react';

const arr2 = [3, 4, 4, 5, 7, 8] as number[];
const arr1 = [1, 2, 6, 9, 10] as number[];
let n = arr1.length + arr2.length;

const mergeSort = (arr1: number[], arr2: number[]) => {
  let i = 0;
  let j = 0;
  const sorted = [];

  for (let index = 0; index < n; index++) {
    console.log(index, i, j);

    const valArr1 = arr1[i];
    const valArr2 = arr2[j];

    if (sorted.indexOf(valArr2) !== -1) {
      j += 1;
      continue;
    }
    if (sorted.indexOf(valArr1) !== -1) {
      i += 1;
      continue;
    }

    if (valArr1 > valArr2 || typeof valArr1 === 'undefined') {
      sorted.push(valArr2);
      j += 1;
    } else {
      sorted.push(valArr1);
      i += 1;
    }
  }

  console.log(sorted);
  return sorted;
};

type Props = {
};
type State = {
};

export class MergeSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = mergeSort(arr1, arr2);
    console.log('sortedArray', sortedArray);
    return (
      <div>
        <h3>Array1</h3>
        {arr1.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
        <h3>Array2</h3>
        {arr2.map((item, index) => (
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
      </div>
    );
  }
}
