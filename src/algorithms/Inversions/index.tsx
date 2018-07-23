import React from 'react';
import { NumberInput } from 'ui/NumberInput';
import { countSplitted } from './countLeftSide';

type Props = {
};
type State = {
  list: string;
};

export class Inversions extends React.PureComponent<Props, State> {
  state = {
    // list: '2 1 4 3 5 6 8 7',
    list: '1 5 13 19 3 4 7 18',
    // list: '1 3 2 4 5 6',
  }
  onListChange = (list: string) => {
    this.setState({ list, });
  }
  render() {
    const { list, } = this.state;

    return (
      <div>
        <h3>Input numbers</h3>
        <NumberInput caption={'List (separator - space)'} onChange={this.onListChange} value={list} />
        <h3>Result: {countSplitted(list.split(' '))}</h3>
      </div>
    );
  }
}
