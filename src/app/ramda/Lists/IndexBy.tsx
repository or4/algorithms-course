import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class IndexBy extends React.PureComponent<Props, State> {
  render() {
    let list = [{ id: 'xyz', title: 'A' }, { id: 'abc', title: 'B' }];
    R.indexBy(R.prop('id'), list);
    //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}

    return (
      <div>
        <h3>R.indexBy</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}