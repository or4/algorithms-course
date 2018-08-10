import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class MapObjIndexed extends React.PureComponent<Props, State> {
  render() {
    const values = { x: 1, y: 2, z: 3 };
    const prependKeyAndDouble = (num: number, key: string, obj: any) => key + (num * 2);

    const objToString =
       R.pipe(
         R.toPairs,
         R.map(
           R.join(': ')
         ),
         R.join(', '),
         R.concat('{ '),
         R.flip(R.concat)(' }')
       );

    return (
      <div>
        <h3>MapObjIndexed</h3>
        <div>{`const values = { x: 1, y: 2, z: 3 };`}</div>
        <div>{`const prependKeyAndDouble = (num: number, key: string, obj: any) => key + (num * 2);`}</div>
        <div>{`R.mapObjIndexed(prependKeyAndDouble, values) = ${objToString(R.mapObjIndexed(prependKeyAndDouble, values))}`}</div>

      </div>
    );
  }
}
