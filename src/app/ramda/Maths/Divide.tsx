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
    const divide2 = R.pipe(R.partialRight(R.divide, [2]));

    return (
      <div>
        <h3>R.divide</h3>
        <h5>Simple cases</h5>
        <div>{`divide(10)(2) = ${divide(10)(2)}`}</div>
        <div>{`String(R.divide(1, 2)) = ${String(R.divide(1, 2))}`}</div>
        <div>{`String(R.divide(0.3, 0.2)) = ${String(R.divide(0.3, 0.2))}`}</div>
        <h5>Another case</h5>
        <div>{`const divide2 = R.pipe(R.partialRight(R.divide, [2]));`}</div>
        <div>{`divide2(10) = ${divide2(10)}`}</div>
      </div>
    );
  }
}
