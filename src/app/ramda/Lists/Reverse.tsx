import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Reverse extends React.PureComponent<Props, State> {
  render() {
    R.reverse([1, 2, 3]);  //=> [3, 2, 1]
    R.reverse([1, 2]);     //=> [2, 1]
    R.reverse([1]);        //=> [1]
    R.reverse([]);         //=> []

    R.reverse('abc');      //=> 'cba'
    R.reverse('ab');       //=> 'ba'
    R.reverse('a');        //=> 'a'
    R.reverse('');         //=> ''

    return (
      <div>
        <h3>R.reverse</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
