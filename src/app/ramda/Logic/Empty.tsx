import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Empty extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>R.empty</h3>

        <div>{`R.empty(R.always(42)) //=> Nothing()`}</div>
        <div>{`R.empty([1, 2, 3]) //=> []`}</div>
        <div>{`R.empty('unicorns') //=> ''`}</div>
        <div>{`R.empty({ x: 1, y: 2 }) //=> {}`}</div>
      </div>
    );
  }
}
