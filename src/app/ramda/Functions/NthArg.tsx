import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class NthArg extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.nthArg</h3>
        <div>{`R.nthArg(1)('a', 'b', 'c') = ${R.nthArg(1)('a', 'b', 'c')}`/*=> 'b'*/}</div>
        <div>{`R.nthArg(-1)('a', 'b', 'c') = ${R.nthArg(-1)('a', 'b', 'c')}`/*=> 'c'*/}</div>
      </div>
    );
  }
}
