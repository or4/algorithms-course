import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class UseWith extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.useWith</h3>
        <div>{`R.useWith(Math.pow, [R.identity, R.identity])(3, 4) = ${R.useWith(Math.pow, [R.identity, R.identity])(3, 4)}`}</div>
        <div>{`R.useWith(Math.pow, [R.identity, R.identity])(3)(4) = ${R.useWith(Math.pow, [R.identity, R.identity])(3)(4)}`}</div>
        <div>{`R.useWith(Math.pow, [R.dec, R.inc])(3, 4) = ${R.useWith(Math.pow, [R.dec, R.inc])(3, 4)}`}</div>
      </div>
    );
  }
}
