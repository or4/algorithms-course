import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class All extends React.PureComponent<Props, State> {
  render() {
    let equals3 = R.equals(3);
    R.all(equals3)([3, 3, 3, 3]); //=> true
    R.all(equals3)([3, 3, 1, 3]); //=> false

    return (
      <div>
        <h3>R.all</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
