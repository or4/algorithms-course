import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class NAry extends React.PureComponent<Props, State> {
  render() {
    const takesTwoArgsU = function(a: number, b: number) { return [a, b] };
    const takesOneArgU = R.unary(takesTwoArgsU);

    const takesTwoArgs = (a: number, b: number) => [a, b];
    const takesOneArg = R.nAry(1, takesTwoArgs);

    return (
      <div>
        <h3>R.unary</h3>
        <h5>Allow pass only one arg</h5>
        <div>{`const takesTwoArgsU = function(a: number, b: number) { return [a, b] };`}</div>
        <div>{`takesTwoArgsU.length = ${takesTwoArgsU.length}`}</div>
        <div>{`takesTwoArgsU(1, 2) = ${takesTwoArgsU(1, 2)}`}</div>
        <div>&nbsp;</div>
        <div>{`const takesOneArgU = R.unary(takesTwoArgsU);`}</div>
        <div>{`takesOneArgU.length = ${takesOneArgU.length}`}</div>
        <div>{`takesOneArgU(1, 2) = ${takesOneArg(1)}`}</div>

        <h3>R.nary</h3>
        <h5>Allow pass only N arg</h5>
        <div>{`const takesTwoArgs = (a: number, b: number) => [a, b];`}</div>
        <div>{`takesTwoArgs(1, 2) = ${takesTwoArgs(1, 2)}`}</div>
        <div>{`const takesOneArg = R.nAry(1, takesTwoArgs);`}</div>
        <div>{`takesOneArg.length = ${takesOneArg.length}`}</div>
        <div>{`takesOneArg(1, 2) = ${takesOneArg(1, 2)}`}</div>
      </div>
    );
  }
}
