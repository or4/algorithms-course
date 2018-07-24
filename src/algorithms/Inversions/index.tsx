import React from 'react';
import { StringInput } from 'ui/StringInput';
import { countSplitted } from './countInversions';
import { getInversionsCount } from './mergeSort';

// import { data } from './data';
// const arr = data.split('\n');

type Props = {
};
type State = {
  list: string;
};

export class Inversions extends React.PureComponent<Props, State> {
  state = {
    list: '2 3 1 6 4 5 7',
  }
  onListChange = (list: string) => {
    console.log('onChange list', list);
    this.setState({ list, });
  }
  render() {
    const { list, } = this.state;
    const splittedList = list.split(' ');

    return (
      <div>
        <h3>Input numbers</h3>
        <StringInput caption={'List (separator - space)'} onChange={this.onListChange} value={list} />
        <h3>Result by merge: {getInversionsCount(splittedList)}</h3>
        <h3>Result only splitted: {countSplitted(splittedList)}</h3>
      </div>
    );
  }
}
