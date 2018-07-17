import React from 'react';

const arr = [] as number[];
for (let i = 4; i < 9; i++) {
  arr.push(Number(i));
}
console.log('arr', arr);

// very complex implementation of binary search
const binarySearch = (arr: number[], n: number, value: number): boolean => {
  if (n === 0) {
    return value === arr[n];
  }

  if (value < arr[(n + 1) / 2 - 1]) {
    return binarySearch(arr, ((n + 1) / 2 - 1) - 1, value);
  }
  else if (value > arr[(n + 1) / 2 + 1]) {
    return binarySearch(arr, ((n + 1) / 2 - 1) + 1, value);
  } else if (value === arr[(n + 1) / 2]) {
    return true;
  } else if (value === arr[(n + 1) / 2 + 1]) {
    return true;
  } else if (value === arr[(n + 1) / 2] - 1) {
    return true;
  }
  else {
    return false;
  }
};

type Props = {
};
type State = {
};

export class BinarySearch extends React.PureComponent<Props, State> {
  render() {
    const length = arr.length % 2 === 0 ? arr.length - 1 : arr.length - 1 + 1;
    return (
      <div>
        <h3>Array</h3>
        <div>
          {arr.map(item => <div key={item}>{`${item}`}</div>)}
        </div>

        <h3>Search</h3>
        {<div>{`${0}: ${binarySearch(arr, length, 0)}`}</div>}
        {<div>{`${1}: ${binarySearch(arr, length, 1)}`}</div>}
        {<div>{`${2}: ${binarySearch(arr, length, 2)}`}</div>}
        {<div>{`${3}: ${binarySearch(arr, length, 3)}`}</div>}
        {<div>{`${4}: ${binarySearch(arr, length, 4)}`}</div>}
        {<div>{`${5}: ${binarySearch(arr, length, 5)}`}</div>}
        {<div>{`${6}: ${binarySearch(arr, length, 6)}`}</div>}
        {<div>{`${7}: ${binarySearch(arr, length, 7)}`}</div>}
        {<div>{`${8}: ${binarySearch(arr, length, 8)}`}</div>}
        {<div>{`${9}: ${binarySearch(arr, length, 9)}`}</div>}
        {<div>{`${10}: ${binarySearch(arr, length, 10)}`}</div>}
        {<div>{`${11}: ${binarySearch(arr, length, 11)}`}</div>}
        {<div>{`${12}: ${binarySearch(arr, length, 12)}`}</div>}

      </div>
    );
  }
}
