import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Values extends React.PureComponent<Props, State> {
  render() {
    R.values({ a: 1, b: 2, c: 3 }); //=> [1, 2, 3]

    return (
      <div>
        <h3>R.values</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <h3>R.valuesIn</h3>
        <h5>Returns a list of all the properties, including prototype properties, of the supplied object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.</h5>
      </div>
    );
  }
}
