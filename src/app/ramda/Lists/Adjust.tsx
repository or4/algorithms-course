import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Adjust extends React.PureComponent<Props, State> {
  render() {
    R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
    // R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
    return (
      <div>
        <h3>R.adjust</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
