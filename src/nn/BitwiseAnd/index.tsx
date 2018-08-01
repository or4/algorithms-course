import React from 'react';
import { NeuralNetwork } from './NeuralNetwork';

const rawStyle = {
  label: {
    display: 'block',
    marginBottom: '8px',
  },
  button: {
    marginBottom: '8px',
  },
  input: {
    marginLeft: '8px'
  }
};

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
  value1: boolean;
  value2: boolean;
  result: boolean;
};

export class BitwiseAnd extends React.Component<Props, State> {
  state = {
    value1: false,
    value2: false,
    result: false,
  };
  nn = new NeuralNetwork();
  onValue1Change = ({ target }: any) => {
    this.setState({ value1: target.checked }, this.run);
  }
  onValue2Change = ({ target }: any) => {
    this.setState({ value2: target.checked }, this.run);
  }
  run = () => {
    const { value1, value2 } = this.state;
    const result = this.nn.run(value1, value2);
    this.setState({ result });
  }
  render() {
    return (
      <div>
        <h3>
          Bitwise And 2
        </h3>

        <label style={rawStyle.label}>
          Value 1 is
          <input style={rawStyle.input} type="checkbox" onChange={this.onValue1Change} checked={this.state.value1} />
        </label>

        <label style={rawStyle.label}>
          Value 2 is
          <input style={rawStyle.input} type="checkbox" onChange={this.onValue2Change} checked={this.state.value2} />
        </label>

        <h3>Result is {String(this.state.result)}</h3>
      </div>
    );
  }
}
