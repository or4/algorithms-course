import React from 'react';

type Props = {
};
type State = {
  isValid: boolean;
  value: string;
};
class TestPasswordRegExp extends React.PureComponent<Props, State> {
  state = {
    isValid: false,
    value: ''
  };
  isPasswordValid = (password: string): boolean => {
    // const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,120}$/;
    const re = /^(?=.*[A-Z])(?=.*[a-z]).{8,120}$/;
    const result = re.test(password);
    console.log('result', result);
    return result;
  };
  onClick = () => {
    this.setState({ isValid: this.isPasswordValid(this.state.value) });
  }
  onChange = (event: any) => {
    const value = event.target.value;
    this.setState(() => ({ value, }));
  }
  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.value} />
        <button onClick={this.onClick}>
          Validation is {String(this.state.isValid)}
        </button>
      </div>
    );
  }
}
export default TestPasswordRegExp;
