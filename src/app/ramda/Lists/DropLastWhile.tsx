import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class DropLastWhile extends React.PureComponent<Props, State> {
  render() {
    // let lteThree = x => x <= 3;

    // R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]

    // R.dropLastWhile(x => x !== 'd', 'Ramda'); //=> 'Ramd'

    return (
      <div>
        <h3>R.dropLastWhile</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
