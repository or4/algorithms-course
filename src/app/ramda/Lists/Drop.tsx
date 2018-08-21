import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Drop extends React.PureComponent<Props, State> {
  render() {
    const lteThree = (x: number) => x <= 3;
    const lteTwo = (x: number) => x <= 2;
    return (
      <div>
        <h3>R.drop</h3>
        <div>{`R.drop(1, ['foo', 'bar', 'baz']) = ${objToString(R.drop(1, ['foo', 'bar', 'baz']))}`}</div>
        <div>{`R.drop(2, ['foo', 'bar', 'baz']) = ${objToString(R.drop(2, ['foo', 'bar', 'baz']))}`}</div>
        <div>{`R.drop(3, ['foo', 'bar', 'baz']) = ${objToString(R.drop(3, ['foo', 'bar', 'baz']))}`}</div>
        <div>{`R.drop(4, ['foo', 'bar', 'baz']) = ${objToString(R.drop(4, ['foo', 'bar', 'baz']))}`}</div>
        <div>{`R.drop(3, 'ramda') = ${objToString(R.drop(3, 'ramda'))}`}</div>

        <h3>R.dropLast</h3>
        <div>{`R.dropLast(1, ['foo', 'bar', 'baz']) = ${objToString(R.dropLast(1, ['foo', 'bar', 'baz']))}`}</div>
        <div>{`R.dropLast(2, ['foo', 'bar', 'baz']) = ${objToString(R.dropLast(2, ['foo', 'bar', 'baz']))}`}</div>
        <div>{`R.dropLast(3, ['foo', 'bar', 'baz']) = ${objToString(R.dropLast(3, ['foo', 'bar', 'baz']))}`}</div>
        <div>{`R.dropLast(4, ['foo', 'bar', 'baz']) = ${objToString(R.dropLast(4, ['foo', 'bar', 'baz']))}`}</div>
        <div>{`R.dropLast(3, 'ramda') = ${objToString(R.dropLast(3, 'ramda'))}`}</div>

        <h3>R.dropLastWhile</h3>
        <div>{`const lteThree = (x: number) => x <= 3;`}</div>

        <div>{`R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]) = ${objToString(R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]))}`}</div>
        <div>{`R.dropLastWhile(x => x !== 'd', 'Ramda' as any) = ${objToString(R.dropLastWhile(x => x !== 'd', 'Ramda' as any))}`}</div>

        <h3>R.dropWhile</h3>
        <div>{`const lteTwo = (x: number) => x <= 2;`}</div>
        <div>{`R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]) = ${objToString(R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]))}`}</div>
        <div>{`R.dropWhile(x => x !== 'd', 'Ramda' as any) = ${objToString(R.dropWhile(x => x !== 'd', 'Ramda' as any))}`}</div>
      </div>
    );
  }
}
