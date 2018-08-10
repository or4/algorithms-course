import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

/*
R.not(true); //=> false
R.not(false); //=> true
R.not(0); //=> true
R.not(1); //=> false
*/
export class Not extends React.PureComponent<Props, State> {
  render() {


    return (
      <div>
        <h3>Not</h3>
        <div>{`R.not(true) = ${R.not(true)}`}</div>
        <div>{`R.not(false) = ${R.not(false)}`}</div>
        <div>{`R.not(0) = ${R.not(0)}`}</div>
        <div>{`R.not(1) = ${R.not(1)}`}</div>
        <div>{`R.not({}) = ${R.not({})}`}</div>
        <div>{`R.not([]) = ${R.not([])}`}</div>
        <div>{`R.not(String([])) = ${R.not(String([]))}`}</div>
      </div>
    );
  }
}
