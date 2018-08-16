import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class LensProp extends React.PureComponent<Props, State> {
  render() {
    let xLens = R.lensProp('x');

    R.view(xLens, { x: 1, y: 2 });            //=> 1
    R.set(xLens, 4, { x: 1, y: 2 });          //=> {x: 4, y: 2}
    R.over(xLens, R.negate, { x: 1, y: 2 });  //=> {x: -1, y: 2}
    return (
      <div>
        <h3>R.lens</h3>
      </div>
    );
  }
}
