import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const add = R.pipe<number, number, number>(
  R.add
);

// using pipe typescript allows only strings as arguments
// <h3>Result: {add('1')('2')}</h3>
export class Add extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.add</h3>
        <div>{`String(R.add(1, 2)) = ${String(R.add(1, 2))}`}</div>
        <div>{`String(R.add(1)(2)) = ${String(R.add(1)(2))}`}</div>
        <div>{`add(0.1, 0.2) = ${add(0.1, 0.2)}`}</div>
        <div>{`String(R.add(0.1, 0.2)) = ${String(R.add(0.1, 0.2))}`}</div>
      </div>
    );
  }
}
