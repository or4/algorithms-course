import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class TakeLastWhile extends React.PureComponent<Props, State> {
  render() {
    // let isNotOne = x => x !== 1;

    // R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]

    // R.takeLastWhile(x => x !== 'R', 'Ramda'); //=> 'amda'

    return (
      <div>
        <h3>R.takeLastWhile</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
