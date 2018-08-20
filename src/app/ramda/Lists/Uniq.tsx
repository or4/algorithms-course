import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Uniq extends React.PureComponent<Props, State> {
  render() {
    R.uniq([1, 1, 2, 1]); //=> [1, 2]
    R.uniq([1, '1']);     //=> [1, '1']
    R.uniq([[42], [42]]); //=> [[42]]

    R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]


    let strEq = R.eqBy(String);
    R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
    R.uniqWith(strEq)([{}, {}]);       //=> [{}]
    R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
    R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
    return (
      <div>
        <h3>R.uniq</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
