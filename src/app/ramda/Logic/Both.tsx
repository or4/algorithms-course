import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Both extends React.PureComponent<Props, State> {
  render() {
    const f = R.both(R.flip(R.gt)(10), R.flip(R.lt)(20));

    return (
      <div>
        <h3>Both</h3>
        <div>{`const f = R.both(R.gt(R.__, 10), R.lt(R.__, 20)) // deprecated`}</div>
        <div>{`const f = R.both(R.flip(R.gt)(10), R.flip(R.lt)(20))`}</div>

        <div>{`f(15) = ${f(15)}`}</div>
        <div>{`f(30) = ${f(30)}`}</div>
      </div>
    );
  }
}
