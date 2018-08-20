import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Reject extends React.PureComponent<Props, State> {
  render() {
    const isOdd = (n: number) => n % 2 === 1;

    return (
      <div>
        <h3>R.reject</h3>
        <div>{`const isOdd = (n: number) => n % 2 === 1;`}</div>
        <div>{`R.reject(isOdd, [1, 2, 3, 4]) = ${objToString(R.reject(isOdd, [1, 2, 3, 4]))}`}</div>
        <div>{`R.reject(isOdd, { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.reject(isOdd, { a: 1, b: 2, c: 3, d: 4 }))}`}</div>
      </div>
    );
  }
}
