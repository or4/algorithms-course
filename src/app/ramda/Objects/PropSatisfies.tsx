import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class PropSatisfies extends React.PureComponent<Props, State> {
  render() {
    R.propSatisfies(x => x > 0, 'x', { x: 1, y: 2 }); //=> true
    return (
      <div>
        <h3>R.propSatisfies</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
