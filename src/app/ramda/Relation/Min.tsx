import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const equals = R.pipe(
  R.toString,
  R.equals,
) as any;

export class Min extends React.PureComponent<Props, State> {
  render() {
    const square = (n: number) => n * n;
    return (
      <div>
        <h3>R.min</h3>
        <div>{`R.min(789, 123) = ${R.min(789, 123)}`}</div>
        <div>{`R.min('a', 'b') = ${R.min('a', 'b')}`}</div>
        <div>{`R.reduce(R.min, Infinity, [3, -5, 4, 1, -2]) = ${R.reduce(R.min, Infinity, [3, -5, 4, 1, -2])}`}</div>

        <h3>R.minBy</h3>
        <div>{`const square = n => n * n;`}</div>
        <div>{`R.minBy(square, -3, 2) = ${R.minBy(square, -3, 2)}`}</div>

        <div>{`R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]) = ${R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2])}`}</div>
        <div>{`R.reduce(R.minBy(square), Infinity, []) = ${R.reduce(R.minBy(square), Infinity, [])}`}</div>

      </div>
    );
  }
}
