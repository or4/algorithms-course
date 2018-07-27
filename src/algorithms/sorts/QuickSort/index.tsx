import React from 'react';
// import { quickSortFirstWrapper } from './quickSortFirst';
import { quickSortFirstWrapper } from './quickSortCoursera';
// import { quick_sort } from './quickSortOther';

// import { getRandomStringArray } from 'utils/helpers';
// const arr = getRandomStringArray(210);

// import { data } from './data';
// const arr = data;
const arr = ['3', '8', '2', '5', '1', '4', '7', '6'];
// const arr = ['5', '4', '1', '6', '3', '2', '9'];
// const arr = ['2', '4', '3', '5'];
// const arr = ['2', '4', '3'];

type Props = {
};
type State = {
};

export class QuickSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray1 = quickSortFirstWrapper(arr);
    // quickSortFirstWrapper(arr);
    // quick_sort(arr);
    /*
    const sortedArray2 = quick_sort([...arr]);

    <div>
      {sortedArray2.join(' ')}
    </div>
    */

    return (
      <div>
        <h3>Array</h3>
        {arr.join(' ')}
        <h3>Sorted</h3>
        <div>
          {sortedArray1.join(' ')}
        </div>
      </div>
    );
  }
}
