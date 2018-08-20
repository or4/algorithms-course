import React from 'react';
import { sccs } from './sccsIterative';

// import { data } from './data/dataTest40';
import { data } from './data/data';

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
        <h5>{result}</h5>
      </div>
    );
  }
}
