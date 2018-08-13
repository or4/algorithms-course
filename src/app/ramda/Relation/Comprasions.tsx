import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const equals = R.pipe(
  R.toString,
  R.equals,
) as any;

export class Comprasions extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.lt, R.lte, R.gt, R.gte</h3>
        <h3>R.lt</h3>
        <div>{`R.lt(2, 1) = ${R.lt(2, 1)}`}</div>
        <div>{`R.lt(2, 2) = ${R.lt(2, 2)}`}</div>
        <div>{`R.lt(2, 3) = ${R.lt(2, 3)}`}</div>
        <div>{`R.lt('a' as any, 'z' as any) = ${R.lt('a' as any, 'z' as any)}`}</div>
        <div>{`R.lt('z' as any, 'a' as any) = ${R.lt('z' as any, 'a' as any)}`}</div>

        <h3>R.lte</h3>
        <div>{`R.lte(2, 1) = ${R.lte(2, 1)}`}</div>
        <div>{`R.lte(2, 2) = ${R.lte(2, 2)}`}</div>
        <div>{`R.lte(2, 3) = ${R.lte(2, 3)}`}</div>
        <div>{`R.lte('a' as any, 'z' as any) = ${R.lte('a' as any, 'z' as any)}`}</div>
        <div>{`R.lte('z' as any, 'a' as any) = ${R.lte('z' as any, 'a' as any)}`}</div>


        <h3>R.gt</h3>
        <div>{`R.gt(2, 1) = ${R.gt(2, 1)}`}</div>
        <div>{`R.gt(2, 2) = ${R.gt(2, 2)}`}</div>
        <div>{`R.gt(2, 3) = ${R.gt(2, 3)}`}</div>
        <div>{`R.gt('a' as any, 'z' as any) = ${R.gt('a' as any, 'z' as any)}`}</div>
        <div>{`R.gt('z' as any, 'a' as any) = ${R.gt('z' as any, 'a' as any)}`}</div>

        <h3>R.gte</h3>
        <div>{`R.gte(2, 1) = ${R.gte(2, 1)}`}</div>
        <div>{`R.gte(2, 2) = ${R.gte(2, 2)}`}</div>
        <div>{`R.gte(2, 3) = ${R.gte(2, 3)}`}</div>
        <div>{`R.gte('a' as any, 'z' as any) = ${R.gte('a' as any, 'z' as any)}`}</div>
        <div>{`R.gte('z' as any, 'a' as any) = ${R.gte('z' as any, 'a' as any)}`}</div>

      </div>
    );
  }
}
