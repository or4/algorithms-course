import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const divide = R.pipe(
  R.divide
);

export class Divide extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Divide</h3>
        <h3>Result: {divide(10)(2)}</h3>
        <h3>Result: {String(R.divide(1, 2))}</h3>
        <h3>Result: {String(R.divide(0.3, 0.2))}</h3>
      </div>
    );
  }
}
