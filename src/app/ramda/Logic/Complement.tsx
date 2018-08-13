import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Complement extends React.PureComponent<Props, State> {
  render() {
    const isNil = R.isNil;
    const isNotNil = R.complement(R.isNil);
    return (
      <div>
        <h3>R.complement</h3>
        <h5>Takes a function f and returns a function g such that if called with the same arguments when f returns a "truthy" value, g returns false and when f returns a "falsy" value g returns true.</h5>
        <h5>R.complement may be applied to any functor</h5>
        <div>{`const isNil = R.isNil;`}</div>
        <div>{`const isNotNil = R.complement(R.isNil);`}</div>
        <div>{`isNil(null) = ${isNil(null)}`}</div>
        <div>{`isNotNil(null) = ${isNotNil(null)}`}</div>
        <div>{`isNil(7) = ${isNil(7)}`}</div>
        <div>{`isNotNil(7) = ${isNotNil(7)}`}</div>
      </div>
    );
  }
}
