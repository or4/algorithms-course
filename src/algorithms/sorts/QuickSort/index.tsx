import React from 'react';
import { quickSortFirstWrapper } from './quickSortFirst';
import { quick_sort } from './quickSortOther';

// import { getRandomStringArray } from 'utils/helpers';
// const arr = getRandomStringArray(210);
import { data } from './data';
const arr = data;

// const arr = ['5', '4', '1', '6', '3', '2', '9']; // getRandomStringArray(7);
// const arr = ['2', '4', '3', '5'];
// const arr = ['2', '4', '3'];

type Props = {
};
type State = {
};

export class QuickSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray1 = quickSortFirstWrapper(arr);
    const sortedArray2 = quick_sort(arr);
    // quickSortFirstWrapper(arr);
    // quick_sort(arr);

    return (
      <div>
        <h3>Array</h3>
        {/*arr.join(' ')*/}
        <h3>Sorted</h3>
        <h1>My</h1>
        <div>
          {sortedArray1.join(' ')}
        </div>
        <h1>Other</h1>
        <div>
          {sortedArray2.join(' ')}
        </div>
      </div>
    );
  }
}
