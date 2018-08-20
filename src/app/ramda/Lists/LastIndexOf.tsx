import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class LastIndexOf extends React.PureComponent<Props, State> {
  render() {
    R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]); //=> 6
    R.lastIndexOf(10, [1, 2, 3, 4]); //=> -1

    return (
      <div>
        <h3>R.lastIndexOf</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
