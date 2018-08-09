import React from 'react';
import * as R from 'ramda';
import { binarySearch } from './binarySearch';

const arr = [14, 18, 26, 33, 100, 1001, 1002, 1003];

type Props = {
};
type State = {
};

export class BinarySearch extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>BinarySearch</h3>
        <h5>Time efficiency is O(log(n))</h5>
        <h3>Array</h3>
        {arr.join(', ')}

        <h3>Array with positions</h3>
        {R.pipe(
          R.toPairs,
          // R.tap(console.log),
          R.map(item => [++item[0], item[1]]),
          R.map(R.join(': ')),
          R.join(', '))(arr)
        }

        <h3>Search</h3>
        <div>{`Position of item 14 is ${binarySearch(arr, 14)}`}</div>
        <div>{`Position of item 33 is ${binarySearch(arr, 33)}`}</div>
        <div>{`Position of item 18 is ${binarySearch(arr, 18)}`}</div>
        <div>{`Position of item 1001 is ${binarySearch(arr, 1001)}`}</div>
        <div>{`Position of item 1003 is ${binarySearch(arr, 1003)}`}</div>
      </div>
    );
  }
}
