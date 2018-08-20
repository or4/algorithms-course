import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class Prop extends React.PureComponent<Props, State> {
  render() {
    const abby = { name: 'Abby', age: 7, hair: 'blond' };
    const fred = { name: 'Fred', age: 12, hair: 'brown' };
    const rusty = { name: 'Rusty', age: 10, hair: 'brown' };
    const alois = { name: 'Alois', age: 15, disposition: 'surly' };
    const kids = [abby, fred, rusty, alois];
    const hasBrownHair = R.propEq('hair', 'brown');

    const alice = { name: 'ALICE', age: 101 };
    const favorite = R.prop('favoriteLibrary');
    const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

    return (
      <div>
        <h3>R.prop</h3>
        <h5>Returns a function that when supplied an object returns the indicated property of that object, if it exists.</h5>
        <div>{`R.prop('x', { x: 100 }) = ${objToString(R.prop('x', { x: 100 }))}`}</div>
        <div>{`R.prop('x', { x: () => 1333 }) = ${R.prop('x', { x: () => 1333 })}`}</div>
        <div>{`R.prop('x', { x: () => 1333 })() = ${objToString(R.prop('x', { x: () => 1333 })())}`}</div>
        <div>{`R.prop('x', {} as any) = ${objToString(R.prop('x', {} as any))}`}</div>

        <h3>R.propEq</h3>
        <div>{`const abby = { name: 'Abby', age: 7, hair: 'blond' };`}</div>
        <div>{`const fred = { name: 'Fred', age: 12, hair: 'brown' };`}</div>
        <div>{`const rusty = { name: 'Rusty', age: 10, hair: 'brown' };`}</div>
        <div>{`const alois = { name: 'Alois', age: 15, disposition: 'surly' };`}</div>
        <div>{`const kids = [abby, fred, rusty, alois];`}</div>
        <div>{`const hasBrownHair = R.propEq('hair', 'brown');`}</div>
        <div>{`R.filter(hasBrownHair, kids) = ${objToString(R.filter(hasBrownHair, kids))}`}</div>

        <h3>R.propIs</h3>
        <div>{`R.propIs(Number, 'x', { x: 1, y: 2 }) = ${objToString(R.propIs(Number, 'x', { x: 1, y: 2 }))}`}</div>
        <div>{`R.propIs(Number, 'x', { x: 'foo' }) = ${objToString(R.propIs(Number, 'x', { x: 'foo' }))}`}</div>
        <div>{`R.propIs(Number, 'x', {}) = ${objToString(R.propIs(Number, 'x', {}))}`}</div>

        <h3>R.propOr</h3>
        <h5>If the given, non-null object has an own property with the specified name, returns the value of that property. Otherwise returns the provided default value.</h5>
        <div>{`const alice = { name: 'ALICE', age: 101 };`}</div>
        <div>{`R.prop('name', alice) = ${R.prop('name', alice)}`}</div>
        <div>{`R.prop('nameSome', alice as any) = ${R.prop('nameSome', alice as any)}`}</div>
        <div>{`R.propOr('DefaultValue', 'name', alice) = ${R.propOr('DefaultValue', 'name', alice)}`}</div>
        <div>{`R.propOr('DefaultValue', 'nameSome', alice) = ${R.propOr('DefaultValue', 'nameSome', alice)}`}</div>
      </div>
    );
  }
}
