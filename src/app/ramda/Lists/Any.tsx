import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Any extends React.PureComponent<Props, State> {
  render() {
    let lessThan0 = R.flip(R.lt)(0);
    let lessThan2 = R.flip(R.lt)(2);
    // R.any(lessThan0)([1, 2]); //=> false
    // R.any(lessThan2)([1, 2]); //=> true
    return (

      <div>
        <h3>R.any</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
