import React from 'react';

type Props = {
};
type State = {
  isValid: boolean;
  value: string;
};
export class PasswordRegExp extends React.PureComponent<Props, State> {
  state = {
    isValid: false,
    value: ''
  };
  isPasswordValid = (password: string): boolean => {
    const re = /^(?=.*[A-Z])(?=.*[a-z]).{8,120}$/;
    const result = re.test(password);
    console.log('result', result);
    return result;
  };
  onClick = () => {
  }
  onChange = (event: any) => {
    const value = event.target.value;
    this.setState({ value, isValid: this.isPasswordValid(value) });
  }
  render() {
    return (
      <div>
        <h3>Check some regular expression..</h3>
        <h5>At least 8 symbols, at least one latin upper letter, at least one latin lower letter</h5>
        <input onChange={this.onChange} value={this.state.value} />
        <div style={{ display: 'inline-block', marginLeft: '20px' }}>
          Validation is {String(this.state.isValid)}
        </div>
      </div>
    );
  }
}
