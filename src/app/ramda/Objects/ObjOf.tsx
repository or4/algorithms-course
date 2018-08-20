import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class ObjOf extends React.PureComponent<Props, State> {
  render() {
    const matchPhrases = R.compose(R.objOf('must'), R.map(R.objOf('match_phrase')));
    return (
      <div>
        <h3>R.objOf</h3>
        <div>{`const matchPhrases = R.compose(R.objOf('must'), R.map(R.objOf('match_phrase')));`}</div>
        <div>{`matchPhrases(['foo', 'bar', 'baz']) = ${objToString(matchPhrases(['foo', 'bar', 'baz']))}`}</div>
      </div>
    );
  }
}
