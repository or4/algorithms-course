import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Lens extends React.PureComponent<Props, State> {
  render() {
    const xLens = R.lens(R.prop('x'), R.assoc('x'));

    R.view(xLens, { x: 1, y: 2 });            //=> 1
    R.set(xLens, 4, { x: 1, y: 2 });          //=> {x: 4, y: 2}
    R.over(xLens, R.negate, { x: 1, y: 2 });  //=> {x: -1, y: 2}

    return (
      <div>
        <h3>R.lens</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
        <h3>R.lensIndex</h3>
        <h3>R.lensPath</h3>
        <h3>R.lensProp</h3>
      </div>
    );
  }
}
