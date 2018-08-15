import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Keys extends React.PureComponent<Props, State> {
  render() {
    R.keys({ a: 1, b: 2, c: 3 });
    return (
      <div>
        <h3>R.keys</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
