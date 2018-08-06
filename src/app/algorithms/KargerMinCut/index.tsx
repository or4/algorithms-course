import React from 'react';
import * as R from 'ramda';
// import { data } from './data';
import { data } from './dataSimple';
import { getMinCut } from './kargerMinCut';

const output = {};

for (let i = 0; i < 500; i++) {
  const value = getMinCut(data);
  if (typeof output[value] === 'undefined') {
    output[value] = 1;
  } else {
    output[value] = output[value] + 1;
  }
}

console.log('output', output);

const covertToArray = R.pipe(
  R.toPairs,
  R.map(
    R.join('-')
  ),
  R.join(', '),
);

console.log(covertToArray(output));


type Props = {
};
type State = {
};

export class KargerMinCut extends React.PureComponent<Props, State> {
  state= {
  }

  render() {

    return (
      <div>
        <h3>KargerMinCut</h3>
        <h3>Result is {0}</h3>
      </div>
    );
  }
}
