import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class PropOr extends React.PureComponent<Props, State> {
  render() {
    let alice = {
      name: 'ALICE',
      age: 101
    };
    let favorite = R.prop('favoriteLibrary');
    let favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

    // favorite(alice);  //=> undefined
    favoriteWithDefault(alice);  //=> 'Ramda'

    return (
      <div>
        <h3>R.propOr</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
