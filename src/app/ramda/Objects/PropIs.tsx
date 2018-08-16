import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class PropIs extends React.PureComponent<Props, State> {
  render() {
    R.propIs(Number, 'x', { x: 1, y: 2 });  //=> true
    R.propIs(Number, 'x', { x: 'foo' });    //=> false
    R.propIs(Number, 'x', {});            //=> false
    return (
      <div>
        <h3>R.propEq</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
