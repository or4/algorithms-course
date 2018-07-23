import React from 'react';
import { NumberInput } from 'ui/NumberInput';

type Props = {
};
type State = {
  num1: string;
  num2: string;
};

export class Karatsuba extends React.PureComponent<Props, State> {
  state = {
    num1: '235',
    num2: '146',
  }
  onNum1Change = (num1: string) => {
    this.setState({ num1, });
  }
  onNum2Change = (num2: string) => {
    this.setState({ num2, });
  }
  render() {
    const { num1, num2, } = this.state;

    return (
      <div>
        <h3>Input numbers</h3>
        <NumberInput caption={'Number1'} onChange={this.onNum1Change} value={num1} />
        <NumberInput caption={'Number2'} onChange={this.onNum2Change} value={num2} />
      </div>
    );
  }
}
