import React from 'react';
import * as R from 'ramda';

import { data } from './data/data';
// import { data } from './data/dataTest0';
// import { data } from './data/dataTest9';
// import { data } from './data/dataTest22';
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
        <h5>{result}</h5>
      </div>
    );
  }
}
