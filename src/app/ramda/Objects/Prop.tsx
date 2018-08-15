import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Prop extends React.PureComponent<Props, State> {
  render() {
    R.prop('x', { x: 100 }); //=> 100
    // R.prop('x', {}); //=> undefined

    return (
      <div>
        <h3>R.prop</h3>
        <h5>Returns a function that when supplied an object returns the indicated property of that object, if it exists.</h5>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
