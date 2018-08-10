import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Unary extends React.PureComponent<Props, State> {
  render() {
    const takesTwoArgs = function(a: number, b: number) { return [a, b] };
    const takesOneArg = R.unary(takesTwoArgs);

    return (
      <div>
        <h3>unary</h3>
        <div>{`const takesTwoArgs = function(a: number, b: number) { return [a, b] };`}</div>
        <div>{`takesTwoArgs.length = ${takesTwoArgs.length}`}</div>
        <div>{`takesTwoArgs(1, 2) = ${takesTwoArgs(1, 2)}`}</div>
        <div>&nbsp;</div>
        <div>{`const takesOneArg = R.unary(takesTwoArgs);`}</div>
        <div>{`takesOneArg.length = ${takesOneArg.length}`}</div>
        <div>{`takesOneArg(1, 2) = ${takesOneArg(1)}`}</div>
      </div>
    );
  }
}
