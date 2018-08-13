import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Identical extends React.PureComponent<Props, State> {
  render() {
    const o1 = {};
    const o2 = {};

    return (
      <div>
        <h3>R.identical</h3>
        <h5>R.identical like strong comprasion as ===</h5>
        <div>{`R.identical(o1, o1) = ${R.identical(o1, o1)}`}</div>
        <div>{`R.identical(o1, o2) = ${R.identical(o1, o2)}`}</div>
        <div>{`R.identical(1, 1) = ${R.identical(1, 1)}`}</div>
        <div>{`R.identical(1, '1' as any) = ${R.identical(1, '1' as any)}`}</div>
        <div>{`R.identical([], []) = ${R.identical([], [])}`}</div>
        <div>{`R.identical(0, -0) = ${R.identical(0, -0)}`}</div>
        <div>{`R.identical(NaN, NaN) = ${R.identical(NaN, NaN)}`}</div>
      </div>
    );
  }
}
