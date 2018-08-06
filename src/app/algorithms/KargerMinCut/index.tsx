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

// var values = { x: 1, y: 2, z: 3 };
// let prependKeyAndDouble = (num: any, key: any, obj: any) => ({ key: num });
let prependKeyAndDouble = (obj: any) => ({ obj });


// R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }



// R.mapObjIndexed<{[key: number]: number}, number>(

// const covertToArray = R.mapObjIndexed(prependKeyAndDouble, output);

const covertToArray = R.pipe(
  R.toPairs,
  R.map(
    R.join('-')
  )
);



console.log(covertToArray({ a: 1, b: 2 }));


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
