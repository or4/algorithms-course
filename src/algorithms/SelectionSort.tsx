import React from 'react';

const arr = [] as number[];
while (arr.length < 8) {
  const value = Math.random() * 10 >> 0;
  if (arr.indexOf(value) === -1 && value > 0) {
    arr.push(value);
  }
}

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
        <h3>Array</h3>
        {arr.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
        <h3>Sorted</h3>
        {sortedArray.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    );
  }
}
