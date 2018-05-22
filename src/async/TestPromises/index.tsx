
import React from 'react';
import { getCode } from './pure';

type Props = {
};
type State = {
  started: boolean;
  value: number;
};
class TestPromises extends React.PureComponent<Props, State> {
  state = {
    started: false,
    value: 0,
  }
  async componentDidMount() {
    const result = await getCode();
    this.setState({ started: true, value: result });
  }
  render() {
    return (
      <div>
        {this.state.started ? `done! ${this.state.value}` : 'wait...'}
      </div>
    );
  }
}
export default TestPromises;

