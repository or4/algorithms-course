import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Slice extends React.PureComponent<Props, State> {
  render() {
    R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
    R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
    R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
    R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
    R.slice(0, 3, 'ramda');                     //=> 'ram'

    return (
      <div>
        <h3>R.slice</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
