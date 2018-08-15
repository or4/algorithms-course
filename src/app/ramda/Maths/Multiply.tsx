import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const multiply = R.pipe(
  R.multiply
);

export class Multiply extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.multiply</h3>
        <div>{`multiply(10)(2) = ${multiply(10)(2)}`}</div>
        <div>{`multiply(10)('3' as any) = ${multiply(10)('3' as any)}`}</div>
        <div>{`String(R.multiply(1, 2)) = ${String(R.multiply(1, 2))}`}</div>
      </div>
    );
  }
}
