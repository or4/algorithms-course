import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Lens extends React.PureComponent<Props, State> {
  render() {
    const xLens = R.lens(R.prop('x'), R.assoc('x'));
    const xLensIndex = R.lensIndex(0);
    const xLensPath = R.lensPath(['x', 0, 'y']);
    const xLensProp = R.lensProp('x');

    return (
      <div>
        <h3>R.lens</h3>
        <div>{`const xLens = R.lens(R.prop('x'), R.assoc('x'));`}</div>
        <div>{`R.view(xLens, { x: 1, y: 1 }) = ${objToString(R.view(xLens, { x: 1, y: 1 }))}`}</div>
        <div>{`R.set(xLens, 4, { x: 2, y: 2 }) = ${objToString(R.set(xLens, 4, { x: 2, y: 2 }))}`}</div>
        <div>{`R.over(xLens, R.negate, { x: 3, y: 3 }) = ${objToString(R.over(xLens, R.negate, { x: 3, y: 3 }))}`}</div>

        <h3>R.lensIndex</h3>
        <div>{`const xLensIndex = R.lensIndex(0);`}</div>
        <div>{`R.view(xLensIndex, ['a', 'b', 'c']) = ${objToString(R.view(xLensIndex, ['a', 'b', 'c']))}`}</div>
        <div>{`R.set(xLensIndex, 'x', ['a', 'b', 'c']) = ${objToString(R.set(xLensIndex, 'x', ['a', 'b', 'c']))}`}</div>
        <div>{`R.over(xLensIndex, R.toUpper, ['a', 'b', 'c']) = ${objToString(R.over(xLensIndex, R.toUpper, ['a', 'b', 'c']))}`}</div>

        <h3>R.lensPath</h3>
        <div>{`const xLensPath = R.lensPath(['x', 0, 'y']);`}</div>
        <div>{`R.view(xLensPath, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] }) = ${objToString(R.view(xLensPath, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] }))}`}</div>
        <div>{`R.set(xLensPath, 1, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] }) = ${objToString(R.set(xLensPath, 1, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] }))}`}</div>
        <div>{`R.over(xLensPath, R.negate, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] }) = ${objToString(R.over(xLensPath, R.negate, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] }))}`}</div>

        <h3>R.lensProp</h3>
        <div>{`const xLensProp = R.lensProp('x');`}</div>
        <div>{`R.view(xLensProp, { x: 1, y: 2 }) = ${objToString(R.view(xLensProp, { x: 1, y: 2 }))}`}</div>
        <div>{`R.set(xLensProp, 4, { x: 1, y: 2 }) = ${objToString(R.set(xLensProp, 4, { x: 1, y: 2 }))}`}</div>
        <div>{`R.over(xLensProp, R.negate, { x: 1, y: 2 }) = ${objToString(R.over(xLensProp, R.negate, { x: 1, y: 2 }))}`}</div>
      </div>
    );
  }
}
