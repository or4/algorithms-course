import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Converge extends React.PureComponent<Props, State> {
  render() {
    const formatFp = R.converge(
      R.unapply(R.join(' ')),
      [ // there are 4 functions that consecutively apply to args, than results join by space
        R.always('Value'),
        R.nthArg(0),
        R.always('is not expected here. Possible variants are:'),
        R.compose(R.join(', '), R.nthArg(1))
      ]
    );
    console.log(
      formatFp('1', [4, 2, 3])
    );

    const average = R.converge(R.divide, [R.sum, R.length]);
    const strangeConcat = R.converge(R.concat, [R.toUpper, R.toUpper, R.toUpper, R.toLower]);
    const strangeConcat2 = R.converge(R.unapply(R.join(' / ')), [R.toUpper, R.toUpper, R.toUpper, R.toLower]);

    return (
      <div>
        <h3>R.converge</h3>
        <h5>Case 1</h5>
        <div>{`const average = R.converge(R.divide, [R.sum, R.length]);`}</div>
        <div>{`average([1, 2, 3, 4]) = ${average([1, 2, 3, 4])}`}</div>
        <h5>Case 2</h5>
        <div>{`const strangeConcat = R.converge(R.concat, [R.toUpper, R.toUpper, R.toUpper, R.toLower]);`}</div>
        <div>{`strangeConcat('Yodel') = ${strangeConcat('Yodel')}`}</div>
        <h5>Case 3</h5>
        <div>{`const strangeConcat2 = R.converge(R.unapply(R.join(' / ')), [R.toUpper, R.toUpper, R.toUpper, R.toLower]);`}</div>
        <div>{`strangeConcat2('Yodel') = ${strangeConcat2('Yodel')}`}</div>
      </div>
    );
  }
}
