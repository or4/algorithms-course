import React from 'react';
import { mergeSort } from './mergeSort';

const arr = [2, 1, 4, 7, 6, 5, 3];

type Props = {
};
type State = {
};

export class MergeSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = mergeSort(arr);

    return (
      <div>
        <h3>Array</h3>
        {arr.join(' ')}
        <h3>Sorted</h3>
        {sortedArray.join(' ')}
      </div>
    );
  }
}
