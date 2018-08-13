import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Either extends React.PureComponent<Props, State> {
  render() {
    const f = R.either(x => x > 10, x => x % 2 === 0);

    return (
      <div>
        <h3>R.either</h3>
        <div>{`const f = R.either(x => x > 10, x => x % 2 === 0)`}</div>
        <div>{`f(101) = ${f(101)}`}</div>
        <div>{`f(8) = ${f(8)}`}</div>
      </div>
    );
  }
}
