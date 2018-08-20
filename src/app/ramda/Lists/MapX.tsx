import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class MapX extends React.PureComponent<Props, State> {
  render() {
    let double = (x: number) => x * 2;

    R.map(double, [1, 2, 3]); //=> [2, 4, 6]

    // R.map(double, { x: 1, y: 2, z: 3 }); //=> {x: 2, y: 4, z: 6}


    return (
      <div>
        <h3>R.map</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
