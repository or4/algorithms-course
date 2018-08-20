import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Init extends React.PureComponent<Props, State> {
  render() {
    R.init([1, 2, 3]);  //=> [1, 2]
    R.init([1, 2]);     //=> [1]
    R.init([1]);        //=> []
    R.init([]);         //=> []

    R.init('abc');  //=> 'ab'
    R.init('ab');   //=> 'a'
    R.init('a');    //=> ''
    R.init('');     //=> ''

    return (
      <div>
        <h3>R.init</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
