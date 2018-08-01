import React from 'react';
import { NeuralNetwork } from './NeuralNetwork';
import { NeuralNetworkType } from './types';
import { Select } from 'ui/Select';

const rawStyle = {
  label: {
    display: 'block',
    marginBottom: '8px',
  },
  select: {
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
  type: NeuralNetworkType;
};

export class Conjunction extends React.Component<Props, State> {
  state = {
    value1: false,
    value2: false,
    result: false,
    type: 'conjunction' as NeuralNetworkType,
  };
  nnConjunction = new NeuralNetwork('conjunction');
  nnDisjunction = new NeuralNetwork('disjunction');

  onValue1Change = ({ target }: any) => {
    this.setState({ value1: target.checked }, this.run);
  }
  onValue2Change = ({ target }: any) => {
    this.setState({ value2: target.checked }, this.run);
  }
  onTypeChange = ({ target }: any) => {
    this.setState({ type: target.value }, this.run);
  }
  run = () => {
    const { type, value1, value2 } = this.state;
    const result = type === 'conjunction' ? this.nnConjunction.run(value1, value2) : this.nnDisjunction.run(value1, value2);
    this.setState({ result });
  }

  render() {
    return (
      <div>
        <h3>
          Conjunction or Disjunction
        </h3>

        <Select style={rawStyle.select} value={this.state.type} onChange={this.onTypeChange}>
          <option value="conjunction">Conjunction</option>
          <option value="disjunction">Disjunction</option>
        </Select>


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
