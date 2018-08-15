import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const subtract = R.pipe(
  R.subtract
);

export class Subtract extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.subtract</h3>
        <div>{`subtract(10)(2) = ${subtract(10)(2)}`}</div>
        <div>{`subtract('10' as any)(2) = ${subtract('10' as any)(2)}`}</div>
        <div>{`String(R.subtract(1, 2)) = ${String(R.subtract(1, 2))}`}</div>
      </div>
    );
  }
}
