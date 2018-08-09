import React from 'react';
import { binaryAvlTreeSort } from './binaryAvlTreeSort';

// const arr = [3, 2, 1, 4, 5, 7];
const arr = [1, 2, 3];

type Props = {
};
type State = {
};

export class BinaryTreeSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = binaryAvlTreeSort(arr);

    return (
      <div>
        <h3>BinaryTreeSort</h3>
        <h5>Operations depends O(h), from O(log(n + 1)) to O(1.44log(n + 2) - 0.328)</h5>
        <h3>Array</h3>
        {arr.join(' ')}
        <h3>Sorted</h3>
        {sortedArray.join(' ')}
      </div>
    );
  }
}
