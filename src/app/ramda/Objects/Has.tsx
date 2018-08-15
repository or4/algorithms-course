import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Has extends React.PureComponent<Props, State> {
  render() {
    const hasName = R.has('name');
    hasName({ name: 'alice' });   //=> true
    hasName({ name: 'bob' });     //=> true
    hasName({});                //=> false

    // const point = { x: 0, y: 0 };
    // const pointHas = R.has(R.__, point);
    // pointHas('x');  //=> true
    // pointHas('y');  //=> true
    // pointHas('z');  //=> false

    return (
      <div>
        <h3>R.has</h3>
        <h5>Returns whether or not an object has an own property with the specified name</h5>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
        <h3>R.hasIn</h3>
        <h5>Returns whether or not an object or its prototype chain has a property with the specified name</h5>
      </div>
    );
  }
}
