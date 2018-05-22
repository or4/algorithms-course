import React from 'react';
import Component from './Component';

type Props = {
};
type State = {
  loading: boolean;
};
class Wrapper extends React.PureComponent<Props, State> {
  state={
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, (1000));
  }
  render() {
    return (
      <Component loading={this.state.loading} />
    );
  }
}
export default Wrapper;
