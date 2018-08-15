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
        <div>{`inc('1' as any) = ${inc('1' as any)}`}</div>
        <div>{`String(R.inc(1)) = ${String(R.inc(1))}`}</div>
        <div>{`String(R.inc(1)) = ${String(R.inc(1))}`}</div>
        <div>{`inc('0.1' as any) = ${inc('0.1' as any)}`}</div>
        <div>{`String(R.inc(0.1)) = ${String(R.inc(0.1))}`}</div>
      </div>
    );
  }
}
