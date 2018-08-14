import React from 'react';
import { bubbleSort } from './bubbleSort';
import { getRandomNumberArray } from 'app/utils/helpers';

const arr = getRandomNumberArray(7);

type Props = {
};
type State = {
};

export class BubbleSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = bubbleSort(arr);

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
