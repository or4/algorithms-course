import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

const action1 = R.pipe(
  R.multiply(2),
  R.add as (x: number) => (b: number) => number
);


const action2 = R.pipe(
  R.multiply(2),
  // R.add,
);

export class Test extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Add</h3>
        <h3>Result2: {action1(2)(4)}</h3>
      </div>
    );
  }
} // test
