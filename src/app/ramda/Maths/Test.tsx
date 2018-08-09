import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const action1 = R.pipe(
  R.multiply(2),
  R.add as (x: number) => (b: number) => number
);

const action2 = R.pipe(
  R.values,
  R.map(Number),
  // R.tap(console.log),
  R.reduce(R.max, Number.NEGATIVE_INFINITY)
);

const action3 = R.pipe(
  R.values,
  R.map(Number),
  // R.tap(console.log),
  R.reduce(R.min, Number.POSITIVE_INFINITY)
);

const action4 = R.pipe(
  R.values,
  R.map(String),
  // R.tap(console.log),
  R.reduce(R.add, '0')
);

const action5 = R.pipe(
  R.values,
  // R.tap(console.log),
  R.reduce(R.add as (a: number, b: number) => number, 0)
);

const action6 = R.pipe(
  R.keys,
  R.map(Number),
  // R.tap(console.log),
  R.reduce(R.add as (a: number, b: number) => number, 0)
);

export class Test extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Add</h3>
        <h3>Result1: {action1(2)(4)}</h3>
        <h3>Result2: {action2([2, 3, 4, 5])}</h3>
        <h3>Result3: {action3([2, 3, 4, 5])}</h3>
        <h3>Result4: {action4([2, 3, 4, 5])}</h3>
        <h3>Result5: {action5([2, 3, 4, 5])}</h3>
        <h3>Result6: {action6([2, 3, 4, 5])}</h3>
      </div>
    );
  }
} // test
