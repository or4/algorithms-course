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
        <h3>Result: {multiply(10)(2)}</h3>
        <h3>Result: {multiply(10)('3' as any)}</h3>
        <h3>Result: {String(R.multiply(1, 2))}</h3>
      </div>
    );
  }
}
