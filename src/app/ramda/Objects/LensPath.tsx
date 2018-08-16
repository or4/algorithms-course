import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class LensPath extends React.PureComponent<Props, State> {
  render() {
    let xHeadYLens = R.lensPath(['x', 0, 'y']);

    R.view(xHeadYLens, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] });
    //=> 2
    R.set(xHeadYLens, 1, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] });
    //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
    R.over(xHeadYLens, R.negate, { x: [{ y: 2, z: 3 }, { y: 4, z: 5 }] });
    //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
    return (
      <div>
        <h3>R.lens</h3>
      </div>
    );
  }
}
