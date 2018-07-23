import React from 'react';
import { NumberInput } from 'ui/NumberInput';
import { multiply } from './multiplication';

type Props = {
};
type State = {
  num1: string;
  num2: string;
  calc1: string;
  calc2: string;
};

export class Karatsuba extends React.PureComponent<Props, State> {
  state= {
    num1: '3141592653589793238462643383279502884197169399375105820974944592',
    num2: '2718281828459045235360287471352662497757247093699959574966967627',
    flag: true,
    calc1: '11',
    calc2: '11'
  }
  onNum1Change = (num1: string) => {
    this.setState({ num1, });
  }
  onNum2Change = (num2: string) => {
    this.setState({ num2, });
  }

  onCalc1Change = (calc1: string) => {
    this.setState({ calc1, });
  }
  onCalc2Change = (calc2: string) => {
    this.setState({ calc2, });
  }

  render() {
    const { num1, num2, calc1, calc2 } = this.state;
    const result = multiply(num1, num2);

    return (
      <div>
        <h3>Input numbers</h3>
        <NumberInput caption={'Number1'} onChange={this.onNum1Change} value={num1} />
        <NumberInput caption={'Number2'} onChange={this.onNum2Change} value={num2} />
        <h3>Result is {result}</h3>

        <h3>Calculator</h3>
        <NumberInput caption={'Number1'} onChange={this.onCalc1Change} value={calc1} />
        <NumberInput caption={'Number2'} onChange={this.onCalc2Change} value={calc2} />
        <h3>Calc result is {String(Number(calc1) * Number(calc2))}</h3>
      </div>
    );
  }
}
