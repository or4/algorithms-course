import React from 'react';
import * as R from 'ramda';
import { List } from 'immutable';

type Props = {
};
type State = {
};

const add = R.pipe<number, number, number>(
  R.add
);

// using pipe typescript allows only strings as arguments
// <h3>Result: {add('1')('2')}</h3>
export class Values extends React.PureComponent<Props, State> {
  render() {
    const arr = [1, 2, 3, 4];
    const arrIm = List(arr);

    const showValues = R.pipe(
      R.values,
      R.join(', ')
    );
    console.log('vanila', arr, showValues(arr));
    console.log('immutable', arrIm.toObject(), showValues(arrIm.toObject()));

    return (
      <div>
        <h3>R.values</h3>
      </div>
    );
  }
}
