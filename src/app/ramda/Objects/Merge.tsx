import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Merge extends React.PureComponent<Props, State> {
  render() {
    R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
    //=> { 'name': 'fred', 'age': 40 }

    // const resetToDefault = R.merge(R.__, { x: 0 });
    // resetToDefault({ x: 5, y: 2 }); //=> {x: 0, y: 2}

    return (
      <div>
        <h3>R.merge</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
