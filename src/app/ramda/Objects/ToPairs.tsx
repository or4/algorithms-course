import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class ToPairs extends React.PureComponent<Props, State> {
  render() {
    R.toPairs({ a: 1, b: 2, c: 3 }); //=> [['a', 1], ['b', 2], ['c', 3]]
    return (
      <div>
        <h3>R.toPairs</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <h3>R.toPairsIn</h3>
        <h5>Converts an object into an array of key, value arrays. The object's own properties and prototype properties are used.</h5>
      </div>
    );
  }
}
