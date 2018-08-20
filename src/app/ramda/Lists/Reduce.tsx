import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Reduce extends React.PureComponent<Props, State> {
  render() {
    R.reduce(R.subtract, 0, [1, 2, 3, 4]); // => ((((0 - 1) - 2) - 3) - 4) = -10

    return (
      <div>
        <h3>R.reduce</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
