import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class IsEmpty extends React.PureComponent<Props, State> {
  render() {

    return (
      <div>
        <h3>R.isEmpty</h3>
        <div>R.isEmpty([1, 2, 3]); //=> false</div>
        <div>R.isEmpty([]); //=> true</div>
        <div>R.isEmpty(''); //=> true</div>
        <div>R.isEmpty(null); //=> false</div>
        <div>R.isEmpty({`{}`}); //=> true</div>
        <div>R.isEmpty({`{length: 0}`}); //=> false</div>
      </div>
    );
  }
}
