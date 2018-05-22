import React from 'react';
import Component from './Component';
import { withCenter } from './withCenter';

type Props = {
};
type State = {
  loading: boolean;
};
class LoadingScreenExample extends React.PureComponent<Props, State> {
  state={
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, (1000));
  }
  render() {
    const CentredComponent = withCenter(Component);
    return <CentredComponent loading={this.state.loading} />;
  }
}
export default LoadingScreenExample;
