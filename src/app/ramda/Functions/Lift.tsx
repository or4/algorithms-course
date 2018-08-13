import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Lift extends React.PureComponent<Props, State> {
  render() {
    const madd3 = R.lift((a, b, c) => a + b + c);
    const mmul2 = R.lift((a, b) => a * b);
    const mmul3 = R.lift((a, b, c) => a * b * c);

    const madd3N = R.liftN(3, (...args) => R.sum(args));


    return (
      <div>
        <h3>R.lift</h3>
        <h5>For [1, 2, 3, 4], [10, 20, 30], [100, 200] => a1_b1_c1, a1_b1_c2, a1_b2_c1, a1_b2_c2, a1_b3_c1, a1_b3_c2, a2_b1_c1.. </h5>
        <h5>Case 1</h5>
        <div>{`const mmul2 = R.lift((a, b) => a * b);`}</div>
        <div>{`mmul2(mmul2([1, 2, 3, 4], [10, 20]) = ${mmul2([1, 2, 3, 4], [10, 20]).join(', ')}`}</div>
        <h5>Case 2</h5>
        <div>{`const madd3 = R.lift((a, b, c) => a + b + c);`}</div>
        <div>{`madd3([1, 2, 3, 4], [10, 20], [100, 200]) = ${madd3([1, 2, 3, 4], [10, 20], [100, 200]).join(', ')}`}</div>
        <h5>Case 3</h5>
        <div>{`const mmul3 = R.lift((a, b, c) => a * b * c);`}</div>
        <div>{`mmul3([1, 2, 3, 4], [10, 20], [100, 200]) = ${mmul3([1, 2, 3, 4], [10, 20], [100, 200]).join(', ')}`}</div>

        <h3>R.liftN</h3>
        <h5>Throw error when another count of args</h5>
        <div>{`const madd3N = R.liftN(3, (...args) => R.sum(args));`}</div>
        <div>{`madd3N([1, 2, 3], [1, 2, 3], [1]) = ${madd3N([1, 2, 3], [1, 2, 3], [1]).join(', ')}`}</div>

      </div>
    );
  }
}
