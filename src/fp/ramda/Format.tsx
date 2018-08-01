import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
  isValid: boolean;
  value: string;
};

class Format extends React.PureComponent<Props, State> {
  formatFp = R.converge(
    R.unapply(R.join(' ')),
    [
      R.always('Value'),
      R.nthArg(0),
      R.always('is not expected here. Possible variants are:'),
      R.compose(R.join(', '), R.nthArg(1))
    ]
  );
  format = (actual: any, expected: any) => {
    const variants = expected.join(', ');
    return `Value ${actual} is not expected here. Possible variants are: ${variants}`;
  }
  render() {
    const arrExpected = [1, 2, 3, 4];
    const actual = '10';
    const result = this.formatFp(actual, arrExpected);

    return (
      <div>
        {result}
      </div>
    );
  }
}
export default Format;
