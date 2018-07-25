import React from 'react';
import { quickSort } from './quickSort';
// import { getRandomStringArray } from 'utils/helpers';

const arr = ['4', '2', '6', '5', '3', '9']; // getRandomStringArray(7);

type Props = {
};
type State = {
};

export class QuickSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = quickSort('mediana', arr);

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
