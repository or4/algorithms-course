import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

const equals = R.pipe(
  R.toString,
  R.equals,
) as any;

export class Equals extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Equals</h3>
        <h3>Result: {R.toString(equals(1)(2))}</h3>
        <h3>Result: {String(equals(5)(5))}</h3>
        <h3>Result: {String(equals(1)(2))}</h3>
        <h3>Result: {String(equals(0.1)(0.2))}</h3>
        <h3>Result: {equals(5)(5)}</h3>
        <h3>Result: {equals(1)(2)}</h3>
      </div>
    );
  }
}
