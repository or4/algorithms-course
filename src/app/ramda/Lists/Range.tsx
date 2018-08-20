import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Range extends React.PureComponent<Props, State> {
  render() {
    R.range(1, 5);    //=> [1, 2, 3, 4]
    R.range(50, 53);  //=> [50, 51, 52]

    return (
      <div>
        <h3>R.range</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
