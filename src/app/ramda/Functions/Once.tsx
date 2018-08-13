import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Once extends React.PureComponent<Props, State> {
  render() {
    const addOneOnce = R.once(x => x + 1);

    return (
      <div>
        <h3>R.once</h3>
        <div>{`const addOneOnce = R.once(x => x + 1);`}</div>
        <div>{`addOneOnce(10) = ${addOneOnce(10)}`}</div>
        <div>{`addOneOnce(11) = ${addOneOnce(11)}`}</div>
        <div>{`addOneOnce(12) = ${addOneOnce(12)}`}</div>
        <div>{`addOneOnce(addOneOnce(50)) = ${addOneOnce(addOneOnce(50))}`}</div>
      </div>
    );
  }
}
