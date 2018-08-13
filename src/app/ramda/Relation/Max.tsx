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

export class Max extends React.PureComponent<Props, State> {
  render() {
    const square = (n: number) => n * n;
    return (
      <div>
        <h3>R.max</h3>
        <div>{`R.max(789, 123) = ${R.max(789, 123)}`}</div>
        <div>{`R.max('a', 'b') = ${R.max('a', 'b')}`}</div>
        <div>{`R.reduce(R.max, Number.NEGATIVE_INFINITY, [3, -5, 4, 1, -2]) = ${R.reduce(R.max, Number.NEGATIVE_INFINITY, [3, -5, 4, 1, -2])}`}</div>

        <h3>R.maxBy</h3>
        <div>{`const square = n => n * n;`}</div>
        <div>{`R.maxBy(square, -3, 2) = ${R.maxBy(square, -3, 2)}`}</div>

        <div>{`R.reduce(R.maxBy(square), Number.NEGATIVE_INFINITY, [3, -5, 4, 1, -2]) = ${R.reduce(R.maxBy(square), Number.NEGATIVE_INFINITY, [3, -5, 4, 1, -2])}`}</div>
        <div>{`R.reduce(R.maxBy(square), Number.NEGATIVE_INFINITY, []) = ${R.reduce(R.maxBy(square), Number.NEGATIVE_INFINITY, [])}`}</div>

      </div>
    );
  }
}
