import React from 'react';
import { isNumber } from 'utils/helpers';
import { substract } from './subtraction';
import { multiply } from './multiplication';

const isDev = true;

const style = {
  row: {
    height: '30px',
  },
  input: {
    fontSize: '12px',
    height: '20px',
    lineHeight: '20px',
    marginLeft: '10px',
    width: '250px',
  }
};

type Props = {
};
type State = {
  num1: string;
  num2: string;
  flag: boolean;
};

const testResult = (isDev ? '1554' : '1068039902835864');

export class Karatsuba extends React.PureComponent<Props, State> {
  // state= isDev ? { num1: '12345', num2: '31' } : { num1: '123123123', num2: '8674568' }
  state= { num1: '1234567890123456789', num2: '111', flag: true }
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
  render() {

    console.log(`minus, test: ${Number(substract('444', '123'))} real: ${Number(444 - 123)}`);
    console.log('.');
    console.log('.');
    console.log('.');
    console.log('.');
    console.log(`minus, test: ${Number(substract('4', '5'))} real: ${Number(4 - 5)}`);
    console.log('.');
    console.log('.');
    console.log('.');
    console.log('.');
    console.log(`minus, test: ${Number(substract('44', '51'))} real: ${Number(44 - 51)}`);
    console.log('.');
    console.log('.');
    console.log('.');
    console.log('.');
    console.log(`minus, test: ${Number(substract('444', '543'))} real: ${Number(444 - 543)}`);
    console.log('.');
    console.log('.');
    console.log('.');
    console.log('.');
    console.log(`minus, test: ${Number(substract('4404', '5403'))} real: ${Number(4404 - 5403)}`);
    console.log('.');
    console.log('.');
    console.log('.');
    console.log('.');
    console.log(`minus, test: ${Number(substract('994', '91234'))} real: ${Number(994 - 91234)}`);
    console.log('.');
    console.log('.');
    console.log('.');
    console.log('.');
    console.log(`minus, test: ${Number(substract('1000', '1'))} real: ${Number(1000 - 1)}`);
    console.log('.');
    console.log('.');
    console.log('.');
    console.log('.');

    if (this.state.flag) {
      return null;
    }

    const { num1, num2 } = this.state;
    const result = multiply(num1, num2);
    console.log('result', result);
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
        <div>
          Example mul equals {testResult}
        </div>
        <div>
          Example mul is {String(result === testResult)}
        </div>
      </div>
    );
  }
}
