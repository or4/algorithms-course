import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type TProps = {
};
type State = {
};

export class Props extends React.PureComponent<TProps, State> {
  render() {
    const fullName = R.compose(R.join(' '), R.props(['first', 'last']));

    return (
      <div>
        <h3>R.props</h3>
        <h5>Case 1</h5>
        <div>{`R.props(['x', 'y'], { x: 1, y: 2 }) = ${objToString(R.props(['x', 'y'], { x: 1, y: 2 }))}`}</div>
        <div>{`R.props(['c', 'a', 'b'], { b: 2, a: 1 }) = ${objToString(R.props(['c', 'a', 'b'], { b: 2, a: 1 } as any))}`}</div>
        <h5>Case 2</h5>
        <div>{`const fullName = R.compose(R.join(' '), R.props(['first', 'last']));`}</div>
        <div>{`fullName({ last: 'Bullet-Tooth', age: 33, first: 'Tony' }) = ${objToString(fullName({ last: 'Bullet-Tooth', age: 33, first: 'Tony' }))}`}</div>

        <h3>R.propSatisfies</h3>
        <div>{`R.propSatisfies(x => x > 0, 'x', { x: 1, y: 2 }) = ${objToString(R.propSatisfies(x => x > 0, 'x', { x: 1, y: 2 }))}`}</div>
      </div>
    );
  }
}
