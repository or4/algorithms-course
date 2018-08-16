import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class LensIndex extends React.PureComponent<Props, State> {
  render() {
    let headLens = R.lensIndex(0);

    R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
    R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
    R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']

    return (
      <div>
        <h3>R.lens</h3>
      </div>
    );
  }
}
