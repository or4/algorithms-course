import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class AddIndex extends React.PureComponent<Props, State> {
  render() {
    let mapIndexed = R.addIndex(R.map);
    mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
    //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']

    return (
      <div>
        <h3>R.addIndex</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
