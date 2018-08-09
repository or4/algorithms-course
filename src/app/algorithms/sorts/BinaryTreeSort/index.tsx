import React from 'react';
import { binaryTreeSort } from './binaryTreeSort';

const arr = [3, 2, 1, 4, 5, 7];

type Props = {
};
type State = {
};

export class BinaryTreeSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = binaryTreeSort(arr);

    return (
      <div>
        <h3>BinaryTreeSort</h3>
        <h5>Time efficiency is O(h), best O(log(n)), worst O(n)</h5>
        <h3>Array</h3>
        {arr.join(' ')}
        <h3>Sorted</h3>
        {sortedArray.join(' ')}
      </div>
    );
  }
}
