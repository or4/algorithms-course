import React from 'react';
import * as R from 'ramda';
// import { data } from './data/data';
import { data } from './data/dataTest3';
// import { data } from './data/dataCoursera28';
import { runDijkstra } from './dijkstra';

type Props = {
};
type State = {
  result: string;
};

export class Dijkstra extends React.PureComponent<Props, State> {
  state = {
    result: '',
  }
  componentDidMount() {
    const result = runDijkstra(data);
    this.setState({ result, });
  }
  render() {
    const { result } = this.state;
    return (
      <div>
        <h3>Dijkstra</h3>
        <h5>
          {R.pipe(
            R.split(' '),
            R.map((item: string) => <div key={item}>{item}</div>)
          )(result)}
        </h5>
      </div>
    );
  }
}
