import React from 'react';
import { selectionSort } from './selectionSort';
import { getRandomNumberArray } from 'utils/helpers';

const arr = getRandomNumberArray();

type Props = {
};
type State = {
};

export class SelectionSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = selectionSort(arr);

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
