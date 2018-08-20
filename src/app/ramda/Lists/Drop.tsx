import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Drop extends React.PureComponent<Props, State> {
  render() {
    R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
    R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
    R.drop(3, ['foo', 'bar', 'baz']); //=> []
    R.drop(4, ['foo', 'bar', 'baz']); //=> []
    R.drop(3, 'ramda');               //=> 'da'

    return (
      <div>
        <h3>R.drop</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
