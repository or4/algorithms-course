import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const dec = R.pipe(
  R.dec
);

export class Dec extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.dec</h3>
        <div>{`dec('1' as any) = ${dec('1' as any)}`}</div>
        <div>{`String(R.dec(1)) = ${String(R.dec(1))}`}</div>
        <div>{`String(R.dec(1)) = ${String(R.dec(1))}`}</div>
        <div>{`dec('0.1' as any) = ${dec('0.1' as any)}`}</div>
        <div>{`String(R.dec(0.1)) = ${String(R.dec(0.1))}`}</div>
      </div>
    );
  }
}
