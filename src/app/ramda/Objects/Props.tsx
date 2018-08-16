import React from 'react';
import * as R from 'ramda';

type TProps = {
};
type State = {
};

export class Props extends React.PureComponent<TProps, State> {
  render() {
    R.props(['x', 'y'], { x: 1, y: 2 }); //=> [1, 2]
    // R.props(['c', 'a', 'b'], { b: 2, a: 1 }); //=> [undefined, 1, 2]

    let fullName = R.compose(R.join(' '), R.props(['first', 'last']));
    fullName({ last: 'Bullet-Tooth', age: 33, first: 'Tony' }); //=> 'Tony Bullet-Tooth'
    return (
      <div>
        <h3>R.props</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
