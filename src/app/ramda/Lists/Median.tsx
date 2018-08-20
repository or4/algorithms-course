import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Median extends React.PureComponent<Props, State> {
  render() {
    R.median([2, 9, 7]); //=> 7
    R.median([7, 2, 10, 9]); //=> 8
    R.median([]); //=> NaN

    return (
      <div>
        <h3>R.median</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
