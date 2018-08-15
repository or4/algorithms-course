import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const negate = R.pipe(
  R.negate
);

export class Negate extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.negate</h3>
        <div>{`negate('-1' as any) = ${negate('-1' as any)}`}</div>
        <div>{`String(R.negate(-1)) = ${String(R.negate(-1))}`}</div>
        <div>{`String(R.negate(1)) = ${String(R.negate(1))}`}</div>
        <div>{`negate('0.1' as any) = ${negate('0.1' as any)}`}</div>
        <div>{`String(R.negate(0.1)) = ${String(R.negate(0.1))}`}</div>
      </div>
    );
  }
}
