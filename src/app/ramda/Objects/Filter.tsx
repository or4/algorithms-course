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
    const isUpperCase = (val: number, key: string) => key.toUpperCase() === key;

    R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 });


    return (
      <div>
        <h3>R.filter</h3>
        <div>{`const isEven = (n: number) => n % 2 === 0;`}</div>

        <div>{`R.filter(isEven, [1, 2, 3, 4]) = ${objToString(R.filter(isEven, [1, 2, 3, 4]))}`}</div>
        <div>{`R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }) = ${objToString(R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }))}`}</div>
        <h3>R.pickBy</h3>
        <div>{`const isUpperCase = (val: number, key: string) => key.toUpperCase() === key;`}</div>
        <div>{`R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }) = ${objToString(R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }))}`}</div>
      </div>
    );
  }
}
