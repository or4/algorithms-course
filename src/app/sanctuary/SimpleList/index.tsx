import React from 'react';
import * as R from 'ramda';
import { Map, fromJS, List } from 'immutable';
import { objToString } from '../../ramda/helpers';
import { create, env } from 'sanctuary';

const S = create({
  checkTypes: true,
  env: env,
});


type Props = {
};
type State = {
};

export class SimpleList extends React.PureComponent<Props, State> {
  render() {

    console.log('S.head([1, 2, 3])', (S.head([1, 2, 3]) as any).isJust);
    return (
      <div>
        <h3>Simple List Example</h3>
        <h5>Array is [1, 2, 3]</h5>
        <div>{`(S.head([1, 2, 3]) as any).isJust = ${objToString((S.head([1, 2, 3]) as any).isJust)}`}</div>
        <div>{`(S.head([1, 2, 3]) as any).isNothing = ${objToString((S.head([1, 2, 3]) as any).isNothing)}`}</div>
        <div>{`(S.head([1, 2, 3]) as any).value = ${objToString((S.head([1, 2, 3]) as any).value)}`}</div>

        <h5>Array is []</h5>
        <div>{`(S.head([]) as any).isJust = ${objToString((S.head([]) as any).isJust)}`}</div>
        <div>{`(S.head([]) as any).isNothing = ${objToString((S.head([]) as any).isNothing)}`}</div>
        <div>{`(S.head([]) as any).value = ${objToString((S.head([]) as any).value)}`}</div>

        <h5>Array is [null]</h5>
        <div>{`(S.head([null]) as any).isJust = ${objToString((S.head([null]) as any).isJust)}`}</div>
        <div>{`(S.head([null]) as any).isNothing = ${objToString((S.head([null]) as any).isNothing)}`}</div>
        <div>{`(S.head([null]) as any).value = ${objToString((S.head([null]) as any).value)}`}</div>


        <h5>Array is [undefined]</h5>
        <div>{`(S.head([undefined]) as any).isJust = ${objToString((S.head([undefined]) as any).isJust)}`}</div>
        <div>{`(S.head([undefined]) as any).isNothing = ${objToString((S.head([undefined]) as any).isNothing)}`}</div>
        <div>{`(S.head([undefined]) as any).value = ${objToString((S.head([undefined]) as any).value)}`}</div>

        <h5>Array is [{`{ a: 2 }`}]</h5>
        <div>{`(S.head([{ a: 2 }]) as any).isJust = ${objToString((S.head([{ a: 2 }]) as any).isJust)}`}</div>
        <div>{`(S.head([{ a: 2 }]) as any).isNothing = ${objToString((S.head([{ a: 2 }]) as any).isNothing)}`}</div>
        <div>{`(S.head([{ a: 2 }]) as any).value = ${objToString((S.head([{ a: 2 }]) as any).value)}`}</div>


        <div>{`S.compose(Math.sqrt, S.inc)(99) = ${objToString(S.compose(Math.sqrt)(() => 99))}`}</div>


        <div>{`S.map(S.toUpper)(S.head(['abc', 'test', 'Test'])) = ${objToString((S.map(S.toUpper)(S.head(['abc', 'test', 'Test'])) as any).value)}`}</div>


        <div>{`S.map(S.toUpper)(S.head([])).value = ${objToString((S.map(S.toUpper)(S.head([])) as any).value)}`}</div>

        <div>{`S.map(S.toUpper)(S.head([])).isNothing = ${objToString((S.map(S.toUpper)(S.head([])) as any).isNothing)}`}</div>

      </div>
    );
  }
}
