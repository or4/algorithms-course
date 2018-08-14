import React from 'react';
import * as R from 'ramda';

// import { data as dataSimple } from './data/data';
import { data as testData1 } from './data/dataTest1';
import { sccs } from './sccs';


type Props = {
};
type State = {
  result: string;
};

export class Sccs extends React.PureComponent<Props, State> {
  state = {
    result: '',
  }
  componentDidMount() {
    const result = sccs(testData1);

    this.setState({
      result,
    });
  }
  render() {
    const { result } = this.state;
    return (
      <div>
        <h3>SCCs - Strongly Connected Components</h3>
        <h3>Result is {result}</h3>
      </div>
    );
  }
}
