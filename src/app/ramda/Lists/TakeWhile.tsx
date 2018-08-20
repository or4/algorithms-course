import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class TakeWhile extends React.PureComponent<Props, State> {
  render() {
    // let isNotFour = x => x !== 4;

    // R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]

    // R.takeWhile(x => x !== 'd', 'Ramda'); //=> 'Ram'

    return (
      <div>
        <h3>R.takeWhile</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
