import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Nth extends React.PureComponent<Props, State> {
  render() {
    const list = ['foo', 'bar', 'baz', 'quux'];

    return (
      <div>
        <h3>R.nth</h3>
        <div>{`const list = ['foo', 'bar', 'baz', 'quux'];`}</div>

        <div>{`R.nth(1, list) = ${R.nth(1, list)}`/*=> 'bar'*/}</div>
        <div>{`R.nth(-1, list) = ${R.nth(-1, list)}`/*=> 'quux'*/}</div>
        <div>{`R.nth(-99, list) = ${R.nth(-99, list)}`/*=> undefined*/}</div>
        <div>{`R.nth(2, 'abc') = ${R.nth(2, 'abc' as any)}`/*=> 'c'*/}</div>
        <div>{`R.nth(3, 'abc') = ${String(R.nth(3, 'abc' as any))}`/*=> ''*/}</div>
      </div>
    );
  }
}
