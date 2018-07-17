import React from 'react';

const arr = [] as number[];
for (let i = 0; i < 16; i++) {
  arr.push(Number(i));
}
console.log('arr', arr);

// not working
// const binarySearch = (arr: number[], n: number, value: number): boolean => {
//   console.log('n', n, 'value', value);
//   if (n === 0) {
//     console.log('ex 1');
//     return value === arr[n];
//   }

//   console.log('(n + 1) / 2', (n + 1) / 2);

//   if (value < arr[(n + 1) / 2]) {
//     console.log('st 1');
//     return binarySearch(arr, (n + 1) / 2 - 1, value);
//   } else if (value > arr[(n + 1) / 2 + 1]) {
//     console.log('st 2');
//     return binarySearch(arr, (n + 1) / 2 + 1, value);
//   } else if (value === arr[(n + 1) / 2]) {
//     console.log('ex 2');
//     return true;
//   } else if (value === arr[(n + 1) / 2 + 1]) {
//     console.log('ex 3');
//     return true;
//   } else if (value === arr[(n + 1) / 2] - 1) {
//     console.log('ex 4');
//     return true;
//   } else {
//     console.log('ex 6');
//     return false;
//   }
// };

type Props = {
};
type State = {
};

export class BinarySearch extends React.PureComponent<Props, State> {
  render() {
    const length = arr.length % 2 === 0 ? arr.length - 1 : arr.length - 1 + 1;
    let content = [] as any[];
    // for (let i = -5; i < 40; i++) {
    //   content.push(<div key={i}>{`${i}: ${binarySearch(arr, length, i)}`}</div>);
    // }

    // content.push(<div key={12}>{`${12}: ${binarySearch(arr, length, 12)}`}</div>);
    return (
      <div>
        <h3>Array, length: {length}</h3>
        <div>
          {arr.map(item => <div key={item}>{`${item}`}</div>)}
        </div>

        <h3>Search</h3>

        {content}

      </div>
    );
  }
}
