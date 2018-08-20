import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Take extends React.PureComponent<Props, State> {
  render() {
    R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
    R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
    R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
    R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
    R.take(3, 'ramda');               //=> 'ram'

    let personnel = [
      'Dave Brubeck',
      'Paul Desmond',
      'Eugene Wright',
      'Joe Morello',
      'Gerry Mulligan',
      'Bob Bates',
      'Joe Dodge',
      'Ron Crotty'
    ];

    let takeFive = R.take(5);
    takeFive(personnel);
    //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']

    return (
      <div>
        <h3>R.take</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
