import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class EqProps extends React.PureComponent<Props, State> {
  render() {
    const o1 = { a: 1, b: 2, c: 3, d: 4 };
    const o2 = { a: 10, b: 20, c: 3, d: 40 };
    R.eqProps('a', o1, o2);
    R.eqProps('c', o1, o2);

    return (
      <div>
        <h3>R.eqProps</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
