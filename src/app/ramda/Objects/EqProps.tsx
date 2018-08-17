import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class EqProps extends React.PureComponent<Props, State> {
  render() {
    const f = {};
    const o1 = { a: 1, b: 2, c: 3, d: 4, f, g: {}};
    const o2 = { a: 10, b: 20, c: 3, d: 40, f, g: {}};

    return (
      <div>
        <h3>R.eqProps</h3>
        <h5>Compare props by value not by refs as strong equals</h5>
        <h5>Like R.equals, unlike R.identical</h5>
        <div>{`const f = {};`}</div>
        <div>{`const o1 = { a: 1, b: 2, c: 3, d: 4, f, g: {} };`}</div>
        <div>{`const o2 = { a: 10, b: 20, c: 3, d: 40, f, g: {} };`}</div>
        <div>{`R.eqProps('a', o1, o2) = ${R.eqProps('a', o1, o2)}`}</div>
        <div>{`R.eqProps('c', o1, o2) = ${R.eqProps('c', o1, o2)}`}</div>
        <div>{`R.eqProps('f', o1, o2) = ${R.eqProps('f', o1, o2)}`}</div>
        <div>{`R.eqProps('g', o1, o2) = ${R.eqProps('g', o1, o2)}`}</div>
      </div>
    );
  }
}
