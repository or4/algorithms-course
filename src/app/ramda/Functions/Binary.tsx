import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Binary extends React.PureComponent<Props, State> {
  render() {
    const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];
    const takesTwoArgs = R.binary(takesThreeArgs);

    return (
      <div>
        <h3>R.binary</h3>
        <div>{`const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];`}</div>
        <div>{`takesThreeArgs.length = ${takesThreeArgs.length}`}</div>
        <div>{`takesThreeArgs(1, 2, 3) = ${takesThreeArgs(1, 2, 3)}`}</div>
        <div>{`const takesTwoArgs = R.binary(takesThreeArgs);`}</div>
        <div>{`takesTwoArgs.length = ${takesTwoArgs.length}`}</div>
        <div>{`takesTwoArgs(1, 2, 3) = ${takesTwoArgs(1, 2, 3)}`}</div>
      </div>
    );
  }
}
