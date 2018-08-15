import React from 'react';

// import { data as dataR } from './data/data';
import { data } from './data/dataTest0';
// import { data } from './data/dataTest9';
// import { data } from './data/dataTest40';
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
    const result = sccs(data);

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
