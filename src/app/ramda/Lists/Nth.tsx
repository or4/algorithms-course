import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Nth extends React.PureComponent<Props, State> {
  render() {
    let list = ['foo', 'bar', 'baz', 'quux'];
    R.nth(1, list); //=> 'bar'
    R.nth(-1, list); //=> 'quux'
    R.nth(-99, list); //=> undefined

    // R.nth(2, 'abc'); //=> 'c'
    // R.nth(3, 'abc'); //=> ''

    return (
      <div>
        <h3>R.nth</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
