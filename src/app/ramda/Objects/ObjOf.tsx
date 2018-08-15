import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class ObjOf extends React.PureComponent<Props, State> {
  render() {
    const matchPhrases = R.compose(
      R.objOf('must'),
      R.map(R.objOf('match_phrase'))
    );
    matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}

    return (
      <div>
        <h3>R.objOf</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
