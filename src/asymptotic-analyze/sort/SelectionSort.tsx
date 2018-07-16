import React from 'react';

// in best and worst cases for 100 items 5050 cycles
// 5050 / 100 = 50.5
// ~ 0.5 * n^2
const arr = [] as number[];
for (let i = 0; i < 100; i++) {
  arr.push(Number(-i));
}

// const arr = [4, 3, 2, 1, 0, -1, -2 - 3, -4, -5];
// const arr = [11, 2, 33, 4, 125, 3, 4, 5, 1];
const selectionSort = (arr: number[]) => {
  let totalCounter;
  totalCounter = 0;
  const sortedArray = [];
  const inArray = [...arr];

  while (inArray.length) {
    let tmp = inArray[0];
    for (let i = 0; i < inArray.length; i += 1) {
      if (tmp > inArray[i]) {
        tmp = inArray[i];
      }
      totalCounter++;
    }
    sortedArray.push(tmp);
    inArray.splice(inArray.indexOf(tmp), 1);
  }
  console.log('totalCounter', totalCounter);
  return sortedArray;
};

type Props = {
};
type State = {
};

export class SelectionSort extends React.PureComponent<Props, State> {
  render() {
    const sortedArray = selectionSort(arr);
    console.log('sortedArray', sortedArray);
    return (
      <div>
        {sortedArray.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    );
  }
}
