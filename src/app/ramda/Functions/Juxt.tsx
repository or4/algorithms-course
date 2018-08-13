import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Juxt extends React.PureComponent<Props, State> {
  render() {
    const getRange = R.juxt([Math.min, Math.max]);
    return (
      <div>
        <h3>R.juxt</h3>
        <div>{`const getRange = R.juxt([Math.min, Math.max])`}</div>
        <div>{`getRange(3, 4, 9, -3) = ${getRange(3, 4, 9, -3)}`}</div>
      </div>
    );
  }
}
