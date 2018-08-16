import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class WhereEq extends React.PureComponent<Props, State> {
  render() {
    // pred :: Object -> Boolean
    let pred = R.whereEq({ a: 1, b: 2 });

    pred({ a: 1 });              //=> false
    pred({ a: 1, b: 2 });        //=> true
    pred({ a: 1, b: 2, c: 3 });  //=> true
    pred({ a: 1, b: 1 });        //=> false

    return (
      <div>
        <h3>R.whereEq</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
