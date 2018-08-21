import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Filter extends React.PureComponent<Props, State> {
  render() {
    const isEven = (n: number) => n % 2 === 0;
    const isOdd = (n: number) => n % 2 === 1;

    return (
      <div>
        <h3>R.filter</h3>
        <div>{`const isEven = (n: number) => n % 2 === 0;`}</div>
        <div>{`R.filter(isEven, [1, 2, 3, 4]) = ${objToString(R.filter(isEven, [1, 2, 3, 4]))}`}</div>
        <div>{`R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }))}`}</div>
        <h5>Filter values that accepted by function</h5>
        <div>{`R.filter(R.isNil, [1, null, 3, 4]) = ${objToString(R.filter(R.isNil, [1, null, 3, 4]))}}`}</div>

        <h3>R.reject</h3>
        <div>{`const isOdd = (n: number) => n % 2 === 1;`}</div>
        <div>{`R.reject(isOdd, [1, 2, 3, 4]) = ${objToString(R.reject(isOdd, [1, 2, 3, 4]))}`}</div>
        <div>{`R.reject(isOdd, { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.reject(isOdd, { a: 1, b: 2, c: 3, d: 4 }))}`}</div>
        <h5>Skip values that accepted by function</h5>
        <div>{`R.reject(R.isNill, [1, null, 3, 4]) = ${objToString(R.reject(R.isNil, [1, null, 3, 4]))}`}</div>
      </div>
    );
  }
}
