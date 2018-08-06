import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

const negate = R.pipe(
  R.negate
);

export class Negate extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Negate</h3>
        <h3>Result: {negate('-1' as any)}</h3>
        <h3>Result: {String(R.negate(-1))}</h3>
        <h3>Result: {String(R.negate(1))}</h3>
        <h3>Result: {negate('0.1' as any)}</h3>
        <h3>Result: {String(R.negate(0.1))}</h3>
      </div>
    );
  }
}
