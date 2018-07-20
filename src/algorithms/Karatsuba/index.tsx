import React from 'react';
import { isNumber } from 'utils/helpers';
import { multiply } from './multiplication';

const style = {
  row: {
    height: '30px',
  },
  input: {
    fontSize: '12px',
    height: '20px',
    lineHeight: '20px',
    marginLeft: '10px',
    width: '750px',
  }
};

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
  onNum1Change = ({ target }: any) => {
    const { value } = target;
    if (isNumber(value)) {
      this.setState({ num1: value });
    }
  }
  onNum2Change = ({ target }: any) => {
    const { value } = target;
    if (isNumber(value)) {
      this.setState({ num2: value });
    }
  }
  onCalc1Change = ({ target }: any) => {
    const { value } = target;
    if (isNumber(value)) {
      this.setState({ calc1: value });
    }
  }
  onCalc2Change = ({ target }: any) => {
    const { value } = target;
    if (isNumber(value)) {
      this.setState({ calc2: value });
    }
  }
  render() {
    const { num1, num2, calc1, calc2 } = this.state;
    const result = multiply(num1, num2);

    return (
      <div>
        <h3>Input numbers</h3>
        <div style={style.row}>
          Number1
          <input style={style.input} type="text" value={num1} onChange={this.onNum1Change} />
        </div>
        <div style={style.row}>
          Number2
          <input style={style.input} type="text" value={num2} onChange={this.onNum2Change} />
        </div>
        <h3>Result is {result}</h3>
        <h3>Calculator</h3>
        <div style={style.row}>
          Number1
          <input style={style.input} type="text" value={calc1} onChange={this.onCalc1Change} />
        </div>
        <div style={style.row}>
          Number2
          <input style={style.input} type="text" value={calc2} onChange={this.onCalc2Change} />
        </div>
        <h3>Calc result is {String(Number(calc1) * Number(calc2))}</h3>
      </div>
    );
  }
}
