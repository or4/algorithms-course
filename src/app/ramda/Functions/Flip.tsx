import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Flip extends React.PureComponent<Props, State> {
  render() {
    const mergeThree = (a: number, b: number, c: number) => ([] as number[]).concat(a, b, c);

    return (
      <div>
        <h3>R.flip</h3>
        <div>{`const mergeThree = (a: number, b: number, c: number) => ([] as number[]).concat(a, b, c);`}</div>
        <div>{`mergeThree(1, 2, 3) = ${mergeThree(1, 2, 3)}`}</div>
        <div>{`R.flip(mergeThree)(1, 2, 3) = ${R.flip(mergeThree)(1, 2, 3)}`}</div>
      </div>
    );
  }
}
