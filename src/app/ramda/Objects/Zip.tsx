import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Zip extends React.PureComponent<Props, State> {
  render() {
    const f = (x: number, y: number) => x + y;
    //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
    return (
      <div>
        <h3>R.zip</h3>
        <div>{`R.zip([1, 2, 3], ['a', 'b', 'c']) = ${objToString(R.zip([1, 2, 3], ['a', 'b', 'c']))}`}</div>
        <h3>R.zipObj</h3>
        <div>{`R.zipObj(['a', 'b', 'c'], [1, 2, 3]) = ${objToString(R.zipObj(['a', 'b', 'c'], [1, 2, 3]))}`}</div>
        <h3>R.zipWith</h3>
        <div>{`const f = (x: number, y: number) => x + y;`}</div>
        <div>{`R.zipWith(f, [1, 2, 3], [10, 20, 30]) = ${objToString(R.zipWith(f, [1, 2, 3], [10, 20, 30]))}`}{` => [f(1, 10), f(2, 20), f(3, 30)]`}</div>
      </div>
    );
  }
}
