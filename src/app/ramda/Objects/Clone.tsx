import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Clone extends React.PureComponent<Props, State> {
  render() {
    const objects = [{}, {}, {}];
    const objectsClone = R.clone(objects);

    return (
      <div>
        <h3>R.clone</h3>
        <h5>Creates a deep copy of the value</h5>

        <div>{`const objects = [{}, {}, {}];`}</div>
        <div>{`const objectsClone = R.clone(objects);`}</div>
        <div>{`objects === objectsClone is ${objects === objectsClone}`}</div>
        <div>{`objects[0] === objectsClone[0] is ${objects[0] === objectsClone[0]}`}</div>
      </div>
    );
  }
}
