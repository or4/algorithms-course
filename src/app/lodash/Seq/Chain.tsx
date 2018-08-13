import React from 'react';
import * as _ from 'lodash';

/**
 * medium: Why using `_.chain` is a mistake.
 * https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba
 */

type Props = {
};
type State = {
};

export class Chain extends React.PureComponent<Props, State> {
  render() {
    const users = [
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred', 'age': 40 },
      { 'user': 'pebbles', 'age': 38 }
    ];

    return (
      <div>
        <h3>_.chain</h3>
        <h5>Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled.</h5>
        <div>{`const users = [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }, { 'user': 'pebbles', 'age': 38 }]`}</div>
        <div>{``}</div>
        <div>{`const youngest = _`}</div>
        <div>{`.chain(users)`}</div>
        <div>{`.sortBy('age')`}</div>
        <div>{`.map(o => o.user is o.age)`}</div>
        <div>{`.head()`}</div>
        <div>{`.value(); = ${
          _
            .chain(users)
            .sortBy('age')
            .map(o => `${o.user} is ${o.age}`)
            .head()
            .value()
        }`}</div>
      </div>
    );
  }
}
