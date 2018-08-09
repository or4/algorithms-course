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
        <h3>Subtract</h3>
        <h3>Result: {subtract(10)(2)}</h3>
        <h3>Result: {subtract('10' as any)(2)}</h3>
        <h3>Result: {String(R.subtract(1, 2))}</h3>
      </div>
    );
  }
}
