import React from 'react';
import * as R from 'ramda';

// import { data as dataR } from './data/data';
// import { data } from './data/dataTest0';
// import { data } from './data/dataTest9';
import { data } from './data/dataTest00';
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
        <h5>{R.split(/(\}, \{)|(\[\{)|(\}\])/, result).map(
          (item: any, index: number) => {
            if (!item || item.indexOf('len') === -1) {
              return null;
            }
            return <div key={index}>{item}</div>;
          }
        )}</h5>
      </div>
    );
  }
}
