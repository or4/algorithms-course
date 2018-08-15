import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Evolve extends React.PureComponent<Props, State> {
  render() {
    const tomato  = { firstName: '  Tomato ', data: { elapsed: 100, remaining: 1400 }, id: 123 };
    const transformations = {
      firstName: R.trim,
      lastName: R.trim, // Will not get invoked.
      data: { elapsed: R.add(1), remaining: R.add(-1) }
    };
    R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}

    return (
      <div>
        <h3>R.evolve</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
