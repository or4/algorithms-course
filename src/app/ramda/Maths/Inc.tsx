import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const inc = R.pipe(
  R.inc
);

export class Inc extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.inc</h3>
        <h3>Result: {inc('1' as any)}</h3>
        <h3>Result: {String(R.inc(1))}</h3>
        <h3>Result: {String(R.inc(1))}</h3>
        <h3>Result: {inc('0.1' as any)}</h3>
        <h3>Result: {String(R.inc(0.1))}</h3>
      </div>
    );
  }
}
