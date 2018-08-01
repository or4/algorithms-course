import React from 'react';
import { NeuralNetwork } from './NeuralNetwork';
import { NeuralNetworkType } from './types';
import { Select } from 'ui/Select';
import { Checkbox } from 'ui/Checkbox';

const nn: {[key in NeuralNetworkType]: NeuralNetwork} = {
  conjunction: new NeuralNetwork('conjunction'),
  disjunction: new NeuralNetwork('disjunction'),
};

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

  onValue1Change = (value1: boolean) => {
    this.setState({ value1 }, this.run);
  }
  onValue2Change = (value2: boolean) => {
    this.setState({ value2 }, this.run);
  }
  onTypeChange = (type: any) => {
    this.setState({ type }, this.run);
  }

  run = () => {
    const { type, value1, value2 } = this.state;
    const result = nn[type].run(value1, value2);
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

        <Checkbox checked={this.state.value1} inputStyle={rawStyle.input} labelStyle={rawStyle.label} onChange={this.onValue1Change} text={'Value 1 is'} />

        <Checkbox checked={this.state.value2} inputStyle={rawStyle.input} labelStyle={rawStyle.label} onChange={this.onValue2Change} text={'Value 2 is'} />

        <h3>Result is {String(this.state.result)}</h3>
      </div>
    );
  }
}
