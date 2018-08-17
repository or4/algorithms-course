import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

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
    // R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}

    return (
      <div>
        <h3>R.evolve</h3>
        <h5>Some likely as R.applySpec</h5>
        <div>{`const tomato  = { firstName: '  Tomato ', data: { elapsed: 100, remaining: 1400 }, id: 123 };`}</div>
        <div>{`const transformations = {`}</div>
        <div>{`firstName: R.trim,`}</div>
        <div>{`lastName: R.trim, // Will not get invoked.`}</div>
        <div>{`data: { elapsed: R.add(1), remaining: R.add(-1) }`}</div>
        <div>{`};`}</div>
        <div>{`R.evolve(transformations, tomato) is ${objToString(R.evolve(transformations, tomato))}`}</div>
      </div>
    );
  }
}
