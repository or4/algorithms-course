import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class MapX extends React.PureComponent<Props, State> {
  render() {
    const double = (x: number) => x * 2;
    const doubleIndexed = (x: number, index: number) => x * 2 * index;

    const digits = ['1', '2', '3', '4'];
    const appender = (a: number, b: number) => [a + b, a + b];

    const values = { x: 1, y: 2, z: 3 };
    const prependKeyAndDouble = (num: any, key: string, obj: any) => key + (num * 2);


    return (
      <div>
        <h3>R.map</h3>
        <div>{`const double = (x: number) => x * 2;`}</div>
        <div>{`R.map(double, [1, 2, 3]); = ${objToString(R.map(double, [1, 2, 3]))}`}</div>
        <div>{`R.map(double, { x: 1, y: 2, z: 3 }); = ${objToString(R.map(double, { x: 1, y: 2, z: 3 }))}`}</div>
        <div>{`const doubleIndexed = (x: number, index: number) => x * 2 * index;`}</div>
        <div>{`R.addIndex(R.map)(doubleIndexed, { x: 1, y: 2, z: 3 }); = ${objToString(R.addIndex(R.map)(doubleIndexed, { x: 1, y: 2, z: 3 } as any))}`}</div>


        <h3>R.mapAccum</h3>
        <div>{`const digits = ['1', '2', '3', '4'];`}</div>
        <div>{`const appender = (a: number, b: number) => [a + b, a + b];`}</div>
        <div>{`R.mapAccum(appender as any, 0, digits); = ${objToString(R.mapAccum(appender as any, 0, digits))}`}</div>


        <h3>R.mapAccumRight</h3>
        <div>{`R.mapAccumRight(appender as any, 5, digits); = ${objToString(R.mapAccumRight(appender as any, 5, digits))}`}</div>

        <h3>R.mapObjIndexed</h3>
        <div>{`const values = { x: 1, y: 2, z: 3 };`}</div>
        <div>{`const prependKeyAndDouble = (num: any, key: string, obj: any) => key + (num * 2);`}</div>
        <div>{`R.mapObjIndexed(prependKeyAndDouble, values); = ${objToString(R.mapObjIndexed(prependKeyAndDouble, values))}`}</div>
      </div>
    );
  }
}
