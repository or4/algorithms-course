import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class MapObjIndexed extends React.PureComponent<Props, State> {
  render() {
    const values = { x: 1, y: 2, z: 3 };
    const prependKeyAndDouble = (num: number, key: string, obj: any) => key + (num * 2);

    return (
      <div>
        <h3>R.mapObjIndexed</h3>
        <div>{`const values = { x: 1, y: 2, z: 3 };`}</div>
        <div>{`const prependKeyAndDouble = (num:number, key: string, obj: any) => key + (num * 2);`}</div>

        <div>{`R.mapObjIndexed(prependKeyAndDouble, values) = ${objToString(R.mapObjIndexed(prependKeyAndDouble, values))}`}</div>
      </div>
    );
  }
}
