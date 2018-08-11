import React from 'react';
import { binaryAvlTreeSort } from './binaryAvlTreeSort';

// const arr = [3, 2, 1, 4, 5, 7];
// const arr = [1, 2, 3, 4, 5];
const arr = [1, 2, 3, 4, 5, 7, 8, 9];

type Props = {
};
type State = {
};

export class BinaryAvlTreeSort extends React.PureComponent<Props, State> {
  render() {
    binaryAvlTreeSort([1, 2]);
    binaryAvlTreeSort(arr);
    // console.log('binaryAvlTreeSort', res);
    return (
      <div>
        <h3>BinaryAvlTreeSort</h3>
        <h5>Operations depends O(h), from O(log(n + 1)) to O(1.44log(n + 2) - 0.328)</h5>
        <h3>Array</h3>
        {arr.join(' ')}
      </div>
    );
  }
}
